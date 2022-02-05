import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ButtonBase from "@material-ui/core/ButtonBase";
import propTypes from "prop-types";
import getChatsAction from "../../actions/chat/chats-action";
import SpinnerWrapper from "../../containers/spinner";
import "./user_chats.css";
import ContainerCustomAvatar from "../avatar/custom-avatar";

class UserChats extends Component {
  componentWillMount = () => {
    this.props.getChats();
  };

  renderChats = arr => {
    return arr.map(x => {
      const user = x.users.find(y => y.id !== this.props.current_user.id);
      const newMsg = this.props.notification.messages.filter(
        y => y.chatRoomId === x.id,
      );
      const chatBg = newMsg.length > 0 ? "new-msgs" : "";

      return (
        <div key={x.id} className="w-100">
          <Link to={`/chat/${x.id}`}>
            <div className={`${chatBg} col-12 d-flex`}>
              <ButtonBase>
                <ContainerCustomAvatar
                  size="Small"
                  userId={user.id}
                  name={user.name}
                />
              </ButtonBase>
              <div className="my-auto ml-5 wrap-text">
                <h5>{user.username}</h5>
                {newMsg.length === 0 && (
                  <span className="text-info">{x.lastMessage}</span>
                )}
                {newMsg.length === 1 && (
                  <span className="text-info">You have 1 unread message</span>
                )}
                {newMsg.length > 1 && (
                  <span className="text-info">
                    You have {newMsg.length} unread messages
                  </span>
                )}
              </div>
            </div>
            <p> </p>
          </Link>
          <hr />
        </div>
      );
    });
  };

  render() {
    const data = this.props.chats.data.sort((b, a) => {
      return (
        new Date(a.lastMessageTime).getTime() -
        new Date(b.lastMessageTime).getTime()
      );
    });

    return (
      <SpinnerWrapper showContent={data !== undefined}>
        <div className="row shadow mt-5 p-5 mb-5 bg-white rounded limit-width">
          {this.renderChats(data)}
        </div>
      </SpinnerWrapper>
    );
  }
}

UserChats.propTypes = {
  getChats: propTypes.func,
  current_user: propTypes.object,
  notification: propTypes.object,
  chats: propTypes.object,
};

UserChats.defaultProps = {
  getChats: () => {},
  current_user: {},
  notification: {},
  chats: {},
};

const mapStateToProps = state => ({
  chats: state.chats,
  chat: state.chat,
  current_user: state.user,
  notification: state.notification,
});

const mapDispatchToProps = dispatch => {
  return {
    getChats: () => dispatch(getChatsAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserChats);
