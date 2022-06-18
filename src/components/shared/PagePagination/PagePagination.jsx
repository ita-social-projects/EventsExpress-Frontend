import React from "react";
import PropTypes from "prop-types";
import Pagination from "react-paginating";
import PAGINATION_LABELS from "../../../constants/paginationConstants";
import {
  PaginationUtil,
  PaginationPages,
} from "../../PaginationUtil/PaginationUtil";

const { FIRST, LAST, NEXT, PREV } = PAGINATION_LABELS;

const PagePagination = ({ callback }, props) => {
  const limit = 6;
  const pageCount = 4;

  const handlePageChange = page => {
    callback(page);
  };
  return (
    <ul className="pagination justify-content-center">
      <Pagination
        total={props.totalPages * limit}
        limit={limit}
        pageCount={pageCount}
        currentPage={props.currentPage}
      >
        {({
          pages,
          currentPage,
          hasNextPage,
          hasPreviousPage,
          previousPage,
          nextPage,
          totalPages,
          getPageItemProps,
        }) => (
          <>
            {hasPreviousPage &&
              PaginationUtil(
                handlePageChange,
                1,
                FIRST,
                previousPage,
                PREV,
                getPageItemProps,
              )}
            {PaginationPages(
              pages,
              currentPage,
              getPageItemProps,
              handlePageChange,
            )}
            {hasNextPage &&
              PaginationUtil(
                handlePageChange,
                nextPage,
                NEXT,
                totalPages,
                LAST,
                getPageItemProps,
              )}
          </>
        )}
      </Pagination>
    </ul>
  );
};

PagePagination.defaultProps = {
  callback: () => {},
  totalPages: null,
  currentPage: null,
};

PagePagination.propTypes = {
  callback: PropTypes.func,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
};

export default PagePagination;
