﻿import React, { Component } from "react";
import { parse as queryStringParse } from "query-string";
import { withRouter } from "react-router-dom";
import propTypes from "prop-types";
import { getQueryStringByFilter } from "../helpers/filterHelper/filterHelper";
import ContactAdminItemContainer from "../../containers/ContactAdminContainers/ContactAdminItemContainer";
import RenderIssuesList from "./RenderIssuesList";

class ContactAdminList extends Component {
  pageChange = page => {
    const { history } = this.props;
    if (history.location.search === "")
      history.push(`${history.location.pathname}?page=${page}`);
    else {
      const queryStringInObject = queryStringParse(history.location.search);
      queryStringInObject.page = page;
      history.location.search = getQueryStringByFilter(queryStringInObject);
      history.push(history.location.pathname + history.location.search);
    }
  };

  renderSingleIssue = item => (
    <ContactAdminItemContainer key={item.messageId + item.status} item={item} />
  );

  render() {
    const changedProps = { ...this.props, dataList: this.props.data_list };

    return (
      <>
        {this.props.data_list > 0 ? (
          <tr className="bg-light text-dark font-weight-bold text-center">
            <td className="justify-content-center">Title</td>
            <td className="d-flex align-items-center justify-content-center">
              Date created
            </td>
            <td className="justify-content-center">Status</td>
            <td className="justify-content-center">Details</td>
            <RenderIssuesList
              {...changedProps}
              renderSingleIssue={this.renderSingleIssue}
              handlePageChange={this.pageChange}
            />
          </tr>
        ) : (
          ""
        )}
        {this.props.data_list < 1 ? (
          <RenderIssuesList
            {...changedProps}
            renderSingleIssue={this.renderSingleIssue}
            handlePageChange={this.pageChange}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

ContactAdminList.propTypes = {
  history: propTypes.object,
  data_list: propTypes.array,
};

ContactAdminList.defaultProps = {
  history: {},
  data_list: [],
};

export default withRouter(ContactAdminList);