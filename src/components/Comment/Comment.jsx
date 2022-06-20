import React from "react";
import propTypes from "prop-types";
import CommentContainer from "../../containers/CommentContainer/CommnetContainer";
import CommentListContainer from "../../containers/CommentContainer/CommentListContainer";
import "./Comment.scss";

const Comment = props => {
  return (
    <div>
      <CommentContainer />
      <CommentListContainer match={props.match} />
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
