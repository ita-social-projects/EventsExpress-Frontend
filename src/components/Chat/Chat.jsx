/* eslint-disable no-console */ // TODO in lines 42,43,67 in the future need cnahge console.log
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { reduxForm, Field, reset as resetForm } from "redux-form";
import ButtonBase from "@material-ui/core/ButtonBase";
import propTypes from "prop-types";
import RenderTextArea from "../helpers/form-helpers/render-text-area";
import getChat, {
  initialConnection,
  reset,
  concatNewMsg,
  deleteOldNotififcation,
} from "../../actions/chat/chat-action";
import Msg from "./Msg";
import SpinnerContainer from "../../containers/SpinnerContainer/SpinnerContainer";
import CustomAvatarContainer from "../CustomAvatar/CustomAvatar";
import { BUTTON_NAMES } from "../../constants/buttonConsts";
import MsgContainer from "../../containers/MsgContainer/MsgContainer";

const Chat = ({
  match,
  notification,
  chat,
  currentUser,
  resetChat,
  hubConnection,
}) => {
  useEffect(() => {
    getChat(match.params.chatId);
  }, []);

  useEffect(() => {
    const newMsg = notification.messages.filter(
      x =>
        x.chatRoomId === chat.data.id &&
        !chat.data.messages.map(y => y.id).includes(x.id),
    );

    if (newMsg.length > 0) {
      concatNewMsg(newMsg);
      deleteOldNotififcation(newMsg.map(x => x.id));
    }

    const msgIds = chat.data.messages
      .filter(x => !x.seen && x.senderId !== currentUser.id)
      .map(x => x.id);

    if (msgIds.length > 0) {
      hubConnection.invoke("seen", msgIds).catch(err => {
        console.log("error");
        console.error(err);
      });
    }

    const deleteMsg = notification.messages.filter(
      x =>
        x.chatRoomId === chat.data.id &&
        chat.data.messages.map(y => y.id).includes(x.id),
    );

    if (deleteMsg.length > 0) {
      deleteOldNotififcation(deleteMsg.map(x => x.id));
    }
  }, []);

  useEffect(() => {
    resetChat();
  }, []);

  const Send = e => {
    e.preventDefault();
    if (e.target.msg.value !== "") {
      hubConnection
        .invoke("send", chat.data.id, e.target.msg.value)
        .catch(err => console.error(err));
    }
    resetForm();
  };

  const renderMessages = arr => {
    if (chat.data) {
      return arr.messages.map(x => {
        const sender = arr.users.find(y => y.id === x.senderId);
        if (arr.id === x.chatRoomId) {
          return (
            <MsgContainer
              key={x.id + x.seen}
              user={sender}
              seenMsg={x.seen}
              msgItem={x}
            />
          );
        }

        return <Msg key={x.id + x.seen} />;
      });
    }

    return null;
  };

  const sender = chat.data.users.find(y => y.id !== currentUser.id);
  const { data } = chat;
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
                  {"Chat with "}
                  {sender != null && sender.username}
                  {chat.data.messages.length}
                  {" Messages"}
                </div>
              </div>
            </div>

            <div className="card-body msg_card_body">
              {renderMessages(chat.data)}
            </div>
            <div className="card-footer">
              <form className="w-100 d-flex" autoComplete="off" onSubmit={Send}>
                <Field
                  name="msg"
                  component={RenderTextArea}
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
                  {BUTTON_NAMES.SEND}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SpinnerContainer>
  );
};

Chat.propTypes = {
  match: propTypes.object,
  notification: propTypes.object,
  chat: propTypes.object,
  currentUser: propTypes.object,
  resetChat: propTypes.func,
  hubConnection: propTypes.any,
};

Chat.defaultProps = {
  match: {},
  notification: {},
  chat: {},
  currentUser: {},
  resetChat: () => {},
  hubConnection: {},
};

const mapStateToProps = state => ({
  currentUser: state.user,
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
