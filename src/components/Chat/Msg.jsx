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
  const { user, item, seenItem } = props;
  useEffect(() => {
    if (notification.seenMessages.map(x => x.id).includes(item.id)) {
      const newItem = notification.seenMessages.find(x => x.id === item.id);
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
            {item.text}
            <br />
            <span className="msg_time">
              {getTimeDifferenceFromNull(item.dateCreated)}
            </span>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-end mb-4">
          <div className="msg_cotainer_send">
            {item.text} {seenItem && <i className="fa fa-check" />}
            <br />
            <span className="msg_time_send text-center">
              {getTimeDifferenceFromNull(item.dateCreated)}
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
  item: propTypes.object,
  deleteSeenMsgNotification: propTypes.func,
  user: propTypes.object,
  seenItem: propTypes.bool,
  currentUser: propTypes.object,
  props: propTypes.object,
};

Msg.defaultProps = {
  notification: {},
  deleteSeenMsgNotification: () => {},
  user: {},
  item: {},
  seenItem: false,
  currentUser: {},
  props: {},
};

export default Msg;
