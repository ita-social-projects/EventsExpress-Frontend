import React from "react";
import propTypes from "prop-types";
import PagePagination from "../shared/PagePagination/PagePagination";
import { NO_RESULT } from "../../constants/labelConstants";
import { PAGINATION_PAGES_TRIGGER } from "../../constants/paginationConstants";
import { EMPTY_ISSUES_ARRAY } from "../../constants/adminConstants";

const RenderIssuesList = ({
  renderSingleIssue,
  handlePageChange,
  ...props
}) => {
  const renderIssues = arr => arr.map(item => renderSingleIssue(item));

  const { page, totalPages, dataList } = props;

  return (
    <>
      {dataList.length > EMPTY_ISSUES_ARRAY ? (
        renderIssues(dataList)
      ) : (
        <div id="notfound" className="w-100">
          <div className="notfound">
            <div className="notfound-404">
              <div className="h1">{NO_RESULT}</div>
            </div>
          </div>
        </div>
      )}
      <br />
      {totalPages > PAGINATION_PAGES_TRIGGER && (
        <PagePagination
          currentPage={page}
          totalPages={totalPages}
          callback={handlePageChange}
        />
      )}
    </>
  );
};

RenderIssuesList.propTypes = {
  renderSingleIssue: propTypes.func,
  dataList: propTypes.array,
  page: propTypes.number,
  totalPages: propTypes.number,
  handlePageChange: propTypes.func,
};

RenderIssuesList.defaultProps = {
  renderSingleIssue: () => {},
  dataList: [],
  page: null,
  totalPages: null,
  handlePageChange: () => {},
};

export default RenderIssuesList;
