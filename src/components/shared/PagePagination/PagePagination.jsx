import React from "react";
import PropTypes from "prop-types";
import Pagination from "react-paginating";
import {
  DEFAULT_PAGE,
  PAGINATION_LABELS,
} from "../../../constants/paginationConstants";
import { renderEdgePage, renderPages } from "../../helpers/paginationUtils";

const { FIRST, LAST, NEXT, PREV } = PAGINATION_LABELS;

const PagePagination = ({ callback, totalPages, currentPage }) => {
  const limit = 6;
  const pageCount = 4;

  const handlePageChange = page => {
    callback(page);
  };
  return (
    <ul className="pagination justify-content-center">
      <Pagination
        total={totalPages * limit}
        limit={limit}
        pageCount={pageCount}
        currentPage={currentPage}
      >
        {({
          pages,
          // eslint-disable-next-line no-shadow
          currentPage,
          hasNextPage,
          hasPreviousPage,
          previousPage,
          nextPage,
          // eslint-disable-next-line no-shadow
          totalPages,
          getPageItemProps,
        }) => (
          <>
            {hasPreviousPage &&
              renderEdgePage(
                handlePageChange,
                DEFAULT_PAGE,
                FIRST,
                previousPage,
                PREV,
                getPageItemProps,
              )}
            {renderPages(
              pages,
              currentPage,
              getPageItemProps,
              handlePageChange,
            )}
            {hasNextPage &&
              renderEdgePage(
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
