import React from "react";
import propTypes from "prop-types";
import AddComment from "../../containers/add-comment";
import CommentListWrapper from "../../containers/comment-list";
import "./Comment.css";

const Comment = props => {
  return (
    <div>
      <AddComment />
      <CommentListWrapper match={props.match} />
    </div>
  );
};

Comment.propTypes = {
  match: propTypes.object,
};

Comment.defaultProps = {
  match: {},
};

export default Comment;
