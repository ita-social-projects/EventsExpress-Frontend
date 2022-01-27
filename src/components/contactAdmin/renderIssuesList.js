import React, { Component } from "react";
import propTypes from "prop-types";
import PagePagination from "../shared/pagePagination";

class RenderIssuesList extends Component {
  renderIssues = arr => arr.map(item => this.props.renderSingleIssue(item));

  render() {
    const { page, totalPages, data_list: dataList } = this.props;

    return (
      <>
        {dataList.length > 0 ? (
          this.renderIssues(dataList)
        ) : (
          <div id="notfound" className="w-100">
            <div className="notfound">
              <div className="notfound-404">
                <div className="h1">No Results</div>
              </div>
            </div>
          </div>
        )}
        <br />
        {totalPages > 1 && (
          <PagePagination
            currentPage={page}
            totalPages={totalPages}
            callback={this.props.handlePageChange}
          />
        )}
      </>
    );
  }
}

RenderIssuesList.propTypes = {
  renderSingleIssue: propTypes.func,
  data_list: propTypes.array,
  page: propTypes.number,
  totalPages: propTypes.number,
  handlePageChange: propTypes.func,
};

RenderIssuesList.defaultProps = {
  renderSingleIssue: () => {},
  data_list: [],
  page: 0,
  totalPages: 0,
  handlePageChange: () => {},
};

export default RenderIssuesList;
