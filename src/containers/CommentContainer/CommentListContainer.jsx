import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CommentList from "../../components/Comment/CommentList";
import getComments from "../../actions/comment/comment-list-action";
import LocalSpinnerContainer from "../SpinnerContainer/LocalSpinnerContainer";

// TODO Refactor class component
class CommentListContainer extends Component {
  componentWillMount() {
    const { page } = this.props.match.params;
    this.props.getComments(this.props.eventId, page);
  }

  render() {
    const { data } = this.props.comments;

    return (
      <LocalSpinnerContainer showContent={data !== null}>
        <CommentList
          evId={this.props.eventId}
          dataList={data.items}
          page={data.pageViewModel.pageNumber}
          totalPages={data.pageViewModel.totalPages}
          callback={this.props.getComments}
        />
      </LocalSpinnerContainer>
    );
  }
}

CommentListContainer.defaultProps = {
  getComments: () => {},
  eventId: null,
  comments: {},
  match: {},
};

CommentListContainer.propTypes = {
  getComments: PropTypes.func,
  eventId: PropTypes.number,
  comments: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = state => ({
  comments: state.comments,
  eventId: state.event.data.id,
});

const mapDispatchToProps = dispatch => ({
  getComments: (data, page) => dispatch(getComments(data, page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentListContainer);
