import React, { Component } from "react";
import { parse as queryStringParse } from "query-string";
import { withRouter } from "react-router-dom";
import propTypes from "prop-types";
import ContactAdminItemContainer from "../../containers/ContactAdminContainers/ContactAdminItemContainer";
import RenderIssuesList from "./RenderIssuesList";
import { getQueryStringByFilter } from "../helpers/filterHelper/filterHelper";

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
    const changedProps = { ...this.props, dataList: this.props.dataList };

    return (
      <>
        {this.props.dataList > 0 ? (
          <tr className="bg-light text-dark font-weight-bold text-center">
            <td className="justify-content-center">{"Title"}</td>
            <td className="d-flex align-items-center justify-content-center">
              {"Date created"}
            </td>
            <td className="justify-content-center">{"Status"}</td>
            <td className="justify-content-center">{"Details"}</td>
            <RenderIssuesList
              {...changedProps}
              renderSingleIssue={this.renderSingleIssue}
              handlePageChange={this.pageChange}
            />
          </tr>
        ) : (
          ""
        )}
        {this.props.dataList < 1 ? (
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
  dataList: propTypes.array,
};

ContactAdminList.defaultProps = {
  history: {},
  dataList: [],
};

export default withRouter(ContactAdminList);
