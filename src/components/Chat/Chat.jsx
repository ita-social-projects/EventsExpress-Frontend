/* eslint-disable no-console */ // TODO in lines 42,43,67 in the future need cnahge console.log
import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { reduxForm, Field, reset as resetForm } from "redux-form";
import ButtonBase from "@material-ui/core/ButtonBase";
import propTypes from "prop-types";

import TextArea from "../shared/TextArea/TextArea";

import getChat, {
  initialConnection,
  reset,
  concatNewMsg,
  deleteOldNotififcation,
} from "../../actions/chat/chatAction";
import Msg from "./Msg";
import SpinnerContainer from "../../containers/SpinnerContainer/SpinnerContainer";
import CustomAvatarContainer from "../CustomAvatar/CustomAvatar";

class Chat extends Component {
  componentWillMount = () => {
    this.props.getChat(this.props.match.params.chatId);
  };

  componentDidUpdate = () => {
    const newMsg = this.props.notification.messages.filter(
      x =>
        x.chatRoomId === this.props.chat.data.id &&
        !this.props.chat.data.messages.map(y => y.id).includes(x.id),
    );

    if (newMsg.length > 0) {
      this.props.concatNewMsg(newMsg);
      this.props.deleteOldNotififcation(newMsg.map(x => x.id));
    }

    const msgIds = this.props.chat.data.messages
      .filter(x => !x.seen && x.senderId !== this.props.current_user.id)
      .map(x => x.id);

    if (msgIds.length > 0) {
      this.props.hubConnection.invoke("seen", msgIds).catch(err => {
        console.log("error");
        console.error(err);
      });
    }

    const deleteMsg = this.props.notification.messages.filter(
      x =>
        x.chatRoomId === this.props.chat.data.id &&
        this.props.chat.data.messages.map(y => y.id).includes(x.id),
    );

    if (deleteMsg.length > 0) {
      this.props.deleteOldNotififcation(deleteMsg.map(x => x.id));
    }
  };

  componentWillUnmount = () => {
    this.props.resetChat();
  };

  Send = e => {
    e.preventDefault();
    if (e.target.msg.value !== "") {
      this.props.hubConnection
        .invoke("send", this.props.chat.data.id, e.target.msg.value)
        .catch(err => console.error(err));
    }
    this.props.resetForm();
  };

  renderMessages = arr => {
    if (this.props.chat.data) {
      return arr.messages.map(x => {
        const sender = arr.users.find(y => y.id === x.senderId);
        if (arr.id === x.chatRoomId) {
          return (
            <Msg key={x.id + x.seen} user={sender} seenItem={x.seen} item={x} />
          );
        }

        return <Msg key={x.id + x.seen} />;
      });
    }

    return null;
  };

  render() {
    const sender = this.props.chat.data.users.find(
      y => y.id !== this.props.current_user.id,
    );
    const { data } = this.props.chat;
    return (
      <SpinnerContainer showContent={data !== undefined}>
        <div className="row justify-content-center h-100 mt-2">
          <div className="col-md-8 col-xl-8 chat">
            <div className="card">
              <div className="card-header msg_head">
                <div className="d-flex bd-highlight">
                  {sender != null && (
                    <ButtonBase>
                      <CustomAvatarContainer
                        size="Small"
                        userId={sender.id}
                        name={sender.name}
                      />
                    </ButtonBase>
                  )}
                  <div className="user_info">
                    <span>Chat with {sender != null && sender.username}</span>
                    <p>{this.props.chat.data.messages.length} Messages</p>
                  </div>
                </div>
              </div>

              <div className="card-body msg_card_body">
                {this.renderMessages(this.props.chat.data)}
              </div>
              <div className="card-footer">
                <form
                  className="w-100 d-flex"
                  autoComplete="off"
                  onSubmit={this.Send}
                >
                  <Field
                    name="msg"
                    component={TextArea}
                    type="input"
                    autocomplete="off"
                    label="Type your message..."
                  />
                  <Button
                    fullWidth
                    type="submit"
                    color="primary"
                    className="w-25"
                  >
                    Send
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </SpinnerContainer>
    );
  }
}

Chat.propTypes = {
  getChat: propTypes.func,
  match: propTypes.object,
  notification: propTypes.object,
  chat: propTypes.object,
  concatNewMsg: propTypes.func,
  deleteOldNotififcation: propTypes.func,
  current_user: propTypes.object,
  resetChat: propTypes.func,
  // TODO: change hubConnection prop
  hubConnection: propTypes.any,
  resetForm: propTypes.func,
};

Chat.defaultProps = {
  getChat: () => {},
  match: {},
  notification: {},
  chat: {},
  concatNewMsg: () => {},
  deleteOldNotififcation: () => {},
  current_user: {},
  resetChat: () => {},
  hubConnection: {},
  resetForm: () => {},
};

const mapStateToProps = state => ({
  current_user: state.user,
  hubConnection: state.hubConnections.chatHub,
  chat: state.chat,
  notification: state.notification,
});

const mapDispatchToProps = dispatch => {
  return {
    initialConnection: () => dispatch(initialConnection()),
    resetChat: () => {
      dispatch(reset());
    },
    getChat: chatId => dispatch(getChat(chatId)),
    concatNewMsg: data => dispatch(concatNewMsg(data)),
    resetForm: () => dispatch(resetForm("chat-form")),
    deleteOldNotififcation: data => dispatch(deleteOldNotififcation(data)),
  };
};

const FormChat = reduxForm({
  form: "chat-form",
})(Chat);

export default connect(mapStateToProps, mapDispatchToProps)(FormChat);
