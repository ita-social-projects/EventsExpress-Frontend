import React from "react";
import propTypes from "prop-types";
import DeleteCommentContainer from "../../containers/CommentContainer/DeleteCommentContainer";
import PagePagination from "../shared/PagePagination/PagePagination";
import { PAGINATION_PAGES_TRIGGER } from "../../constants/paginationConstants";

const CommentList = ({ callback, evId, dataList, page, totalPages }) => {
  const handlePageChange = commeptsPage => {
    callback(evId, commeptsPage);
  };

  return (
    <>
      {dataList.map(comment => (
        <DeleteCommentContainer key={comment.id} item={comment} />
      ))}
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

CommentList.propTypes = {
  callback: propTypes.func,
  evId: propTypes.string,
  dataList: propTypes.array,
  page: propTypes.number,
  totalPages: propTypes.number,
};

CommentList.defaultProps = {
  callback: () => {},
  evId: "",
  dataList: [],
  page: null,
  totalPages: null,
};

export default CommentList;
