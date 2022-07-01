import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonBase from "@material-ui/core/ButtonBase";
import propTypes from "prop-types";
import SpinnerContainer from "../../containers/SpinnerContainer/SpinnerContainer";
import "./UserChats.scss";
import ContainerCustomAvatar from "../CustomAvatar/CustomAvatar";
import { U_HAVE_UNREAD_MSG } from "../../constants/chatConstants";

const UserChats = ({ chats, currentUser, notification, getChats }) => {
  useEffect(() => {
    return () => {
      getChats();
    };
  }, []);

  const renderChats = arr => {
    return arr.map(x => {
      const user = x.users.find(y => y.id !== currentUser.id);
      const newMsg = notification.messages.filter(y => y.chatRoomId === x.id);
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
                  <span className="text-info">{U_HAVE_UNREAD_MSG}</span>
                )}
                {newMsg.length > 1 && (
                  <span className="text-info">
                    {"You have "}
                    {newMsg.length} {"unread messages"}
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

  const data = chats.data.sort((b, a) => {
    return (
      new Date(a.lastMessageTime).getTime() -
      new Date(b.lastMessageTime).getTime()
    );
  });

  return (
    <SpinnerContainer showContent={data !== undefined}>
      <div className="row shadow mt-5 p-5 mb-5 bg-white rounded limit-width">
        {renderChats(data)}
      </div>
    </SpinnerContainer>
  );
};

UserChats.propTypes = {
  getChats: propTypes.func,
  currentUser: propTypes.object,
  notification: propTypes.object,
  chats: propTypes.object,
};

UserChats.defaultProps = {
  getChats: () => {},
  currentUser: {},
  notification: {},
  chats: {},
};

export default UserChats;
