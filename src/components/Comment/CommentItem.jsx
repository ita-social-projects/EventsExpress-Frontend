import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "./Comment.scss";
import getTimeDifferenceFromNull from "../helpers/TimeHelper";
import ContainerCustomAvatar from "../CustomAvatar/CustomAvatar";

const CommentItem = ({ user, item }) => {
  const { text, date, userName, userId } = item;

  return (
    <div>
      <div>
        <div className="row">
          {user !== userId && (
            <div className="photo-container">
              <ContainerCustomAvatar userId={userId} name={userName} />
              <h1 className="text-secondary comment-text">
                {" "}
                {getTimeDifferenceFromNull(date)}
              </h1>
            </div>
          )}
          <div className="mybutton">
            <p>
              <Link to={`/user/${userId}`} className="btn-custom">
                <strong className="text-primary">{userName}</strong>
              </Link>
            </p>
            <div className="clearfix"></div>
            <p>{text}</p>
          </div>
          {user === userId && (
            <div className="photo-container">
              <ContainerCustomAvatar userId={userId} name={userName} />
              <h1 className="text-secondary comment-text">
                {" "}
                {getTimeDifferenceFromNull(date)}
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  user: propTypes.number,
  item: propTypes.object,
};

CommentItem.defaultProps = {
  user: null,
  item: {},
};

export default CommentItem;
