import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CommentForm from "../../components/Comment/CommentForm";
import addComment from "../../actions/comment/commentAddAction";

const CommentContainer = ({ add, userId, eventId, parentId }) => {
  const submit = values => {
    return add({
      ...values,
      userId,
      eventId,
      commentsId: parentId,
    });
  };
  return userId ? <CommentForm onSubmit={submit} /> : null;
};

CommentContainer.defaultProps = {
  add: () => {},
  userId: null,
  eventId: null,
  parentId: null,
};

CommentContainer.propTypes = {
  add: PropTypes.func,
  userId: PropTypes.number,
  eventId: PropTypes.number,
  parentId: PropTypes.number,
};

const mapStateToProps = state => ({
  addCommentStatus: state.add_comment,
  userId: state.user.id,
  eventId: state.event.data.id,
});

const mapDispatchToProps = dispatch => ({
  add: data => dispatch(addComment(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
