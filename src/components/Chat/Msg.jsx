import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonBase from "@material-ui/core/ButtonBase";
import propTypes from "prop-types";
import "./Msg.scss";
import getTimeDifferenceFromNull from "../helpers/TimeHelper";
import ContainerCustomAvatar from "../CustomAvatar/CustomAvatar";

const Msg = ({
  currentUser,
  notification,
  deleteSeenMsgNotification,
  props,
}) => {
  const { user, msgItem, seenMsg } = props;
  useEffect(() => {
    if (notification.seenMessages.map(x => x.id).includes(msgItem.id)) {
      const newItem = notification.seenMessages.find(x => x.id === msgItem.id);
      deleteSeenMsgNotification(newItem.id);
    }
  }, []);
  return (
    <>
      {user.id !== currentUser.id ? (
        <div className="d-flex justify-content-start mb-4">
          <Link to={`/user/${user.id}`}>
            <ButtonBase>
              <ContainerCustomAvatar
                size="Small"
                userId={user.id}
                name={user.name}
              />
            </ButtonBase>
          </Link>
          <div className="msg_cotainer">
            {msgItem.text}
            <br />
            <span className="msg_time">
              {getTimeDifferenceFromNull(msgItem.dateCreated)}
            </span>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-end mb-4">
          <div className="msg_cotainer_send">
            {msgItem.text} {seenMsg && <i className="fa fa-check" />}
            <br />
            <span className="msg_time_send text-center">
              {getTimeDifferenceFromNull(msgItem.dateCreated)}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

// TODO: See seemItem and maybe change type or default.

Msg.propTypes = {
  notification: propTypes.object,
  msgItem: propTypes.object,
  deleteSeenMsgNotification: propTypes.func,
  user: propTypes.object,
  seenMsg: propTypes.bool,
  currentUser: propTypes.object,
  props: propTypes.object,
};

Msg.defaultProps = {
  notification: {},
  deleteSeenMsgNotification: () => {},
  user: {},
  msgItem: {},
  seenMsg: false,
  currentUser: {},
  props: {},
};

export default Msg;
