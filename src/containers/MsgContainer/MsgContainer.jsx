import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteSeenMsgNotification } from "../../actions/chat/chat-action";
import Msg from "../../components/Chat/Msg";

const MsgContainer = ({
  currentUser,
  notification,
  deleteSeenMsgNotificationAction,
  ...props
}) => {
  return (
    <Msg
      currentUser={currentUser}
      notification={notification}
      deleteSeenMsgNotification={deleteSeenMsgNotificationAction}
      props={props}
    />
  );
};

const mapStateToProps = state => ({
  currentUser: state.user,
  notification: state.notification,
});

const mapDispatchToProps = dispatch => ({
  deleteSeenMsgNotificationAction: id =>
    dispatch(deleteSeenMsgNotification(id)),
});

MsgContainer.propTypes = {
  notification: PropTypes.object,
  item: PropTypes.object,
  deleteSeenMsgNotificationAction: PropTypes.func,
  user: PropTypes.object,
  seenItem: PropTypes.bool,
  currentUser: PropTypes.object,
  props: PropTypes.object,
};

MsgContainer.defaultProps = {
  notification: {},
  deleteSeenMsgNotificationAction: () => {},
  user: {},
  item: {},
  props: {},
  seenItem: false,
  currentUser: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(MsgContainer);
