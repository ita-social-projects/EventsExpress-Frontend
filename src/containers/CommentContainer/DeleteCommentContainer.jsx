import React from "react";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import PropTypes from "prop-types";
import CommentItem from "../../components/Comment/CommentItem";
import deleteComm from "../../actions/comment/comment-delete-action";
import "../../components/Comment/Comment.scss";
import CommentList from "../../components/Comment/CommentList";
import CommnetContainer from "./CommnetContainer";
import { setAlert } from "../../actions/alert-action";

class DeleteCommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: true };
  }

  changeInfo = () => {
    this.setState(prevState => ({
      info: !prevState.info,
    }));
  };

  submit = () => {
    const value = this.props.item;
    this.props.deleteComm({ id: value.id, eventId: this.props.eventId });
  };

  render() {
    const { id } = this.props.item;
    return (
      <>
        <div className="ItemComment">
          <div className="comment-container">
            <CommentItem item={this.props.item} user={this.props.userId} />
            <div className="ItemComment">
              {this.props.item.commentsId === null && this.state.info && (
                <div className="mybutton">
                  <Fab
                    size="small"
                    onClick={this.changeInfo}
                    aria-label="Reply"
                  >
                    <i className="fa fa-comments" />
                  </Fab>
                </div>
              )}
              {this.props.item.commentsId === null && !this.state.info && (
                <div className="mybutton">
                  <Fab
                    size="small"
                    onClick={this.changeInfo}
                    aria-label="Cancel"
                  >
                    <i className="fa fa-times" />
                  </Fab>
                </div>
              )}
              {this.props.item.userId === this.props.userId && (
                <div className="mybutton">
                  <Fab size="small" onClick={this.submit} aria-label="Delete">
                    <i className="fa fa-trash" />
                  </Fab>
                </div>
              )}
            </div>
          </div>
        </div>
        {!this.state.info && <CommnetContainer parentId={id} />}
        <div className="children">
          {this.props.item.children.length !== 0 &&
          this.props.item.children !== null ? (
            <CommentList dataList={this.props.item.children} />
          ) : null}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  userId: state.user.id,
  eventId: state.event.data.id,
  errorInfo: state.errorMessages,
});

const mapDispatchToProps = dispatch => {
  return {
    deleteComm: value => dispatch(deleteComm(value)),
    alert: data => dispatch(setAlert(data)),
  };
};

DeleteCommentContainer.propTypes = {
  deleteComm: PropTypes.func,
  eventId: PropTypes.string,
  item: PropTypes.object,
  userId: PropTypes.string,
};

DeleteCommentContainer.defaultProps = {
  deleteComm: () => {},
  eventId: "",
  item: {},
  userId: "",
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteCommentContainer);
