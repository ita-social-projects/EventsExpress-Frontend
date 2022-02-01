import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "./Comment.css";
import getTimeDifferenceFromNull from "../helpers/TimeHelper";
import ContainerCustomAvatar from "../avatar/custom-avatar";

export default class commentItem extends PureComponent {
  render() {
    const { text, date, userName, userId } = this.props.item;
    const { user } = this.props;
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
                  <a className="float-left" href={`/user/${userId}`}>
                    <strong className="text-primary">{userName}</strong>
                  </a>
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
  }
}

commentItem.propTypes = {
  user: propTypes.number,
  item: propTypes.object,
};

commentItem.defaultProps = {
  user: null,
  item: {},
};
