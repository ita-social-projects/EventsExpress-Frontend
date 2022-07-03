import React from "react";
import { parse as queryStringParse } from "query-string";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import ContactAdminItemContainer from "../../containers/ContactAdminContainers/ContactAdminItemContainer";
import RenderIssuesList from "./RenderIssuesList";
import { getQueryStringByFilter } from "../helpers/filterHelper/filterHelper";
import { CONTACT_ADMIN_CONSTS } from "../../constants/adminConstants";

const ContactAdminList = ({ dataList, filter, page, totalPages, ...props }) => {
  const pageChange = pageItem => {
    const { history } = props;
    if (history.location.search === "")
      history.push(`${history.location.pathname}?page=${pageItem}`);
    else {
      const queryStringInObject = queryStringParse(history.location.search);
      queryStringInObject.page = pageItem;
      history.location.search = getQueryStringByFilter(queryStringInObject);
      history.push(history.location.pathname + history.location.search);
    }
  };

  const renderSingleIssue = item => (
    <ContactAdminItemContainer key={item.messageId + item.status} item={item} />
  );
  const changedProps = { props, dataList };

  return (
    <>
      {dataList > 0 && (
        <tr className="bg-light text-dark font-weight-bold text-center">
          <td className="justify-content-center">
            {CONTACT_ADMIN_CONSTS.TITLE}
          </td>
          <td className="d-flex align-items-center justify-content-center">
            {CONTACT_ADMIN_CONSTS.DATE_CREATED}
          </td>
          <td className="justify-content-center">
            {CONTACT_ADMIN_CONSTS.STATUS}
          </td>
          <td className="justify-content-center">
            {CONTACT_ADMIN_CONSTS.DETAILS}
          </td>
          <RenderIssuesList
            {...changedProps}
            renderSingleIssue={renderSingleIssue}
            handlePageChange={pageChange}
          />
        </tr>
      )}
      {dataList < 1 && (
        <RenderIssuesList
          {...changedProps}
          renderSingleIssue={renderSingleIssue}
          handlePageChange={pageChange}
        />
      )}
    </>
  );
};

ContactAdminList.propTypes = {
  history: PropTypes.object,
  filter: PropTypes.object,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  dataList: PropTypes.array,
};

ContactAdminList.defaultProps = {
  history: {},
  filter: {},
  page: 0,
  totalPages: 0,
  dataList: [],
};

export default withRouter(ContactAdminList);
