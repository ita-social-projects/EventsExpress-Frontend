﻿import React from "react";
import { connect } from "react-redux";
import CommentForm from "../components/comment/comment-form";
import addComment from "../actions/comment/comment-add-action";

class CommentWrapper extends React.Component {
  submit = values => {
    return this.props.add({
      ...values,
      userId: this.props.userId,
      eventId: this.props.eventId,
      commentsId: this.props.parentId,
    });
  };

  render() {
    return this.props.userId ? <CommentForm onSubmit={this.submit} /> : null;
  }
}

const mapStateToProps = state => ({
  addCommentStatus: state.add_comment,
  userId: state.user.id,
  eventId: state.event.data.id,
});

const mapDispatchToProps = dispatch => ({
  add: data => dispatch(addComment(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentWrapper);
