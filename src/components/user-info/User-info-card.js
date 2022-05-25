import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import styled from "styled-components";

import genders from "../../constants/GenderConstants";
import CustomAvatar from "../avatar/custom-avatar";
import RatingAverage from "../rating/rating-average";
import getAge from "../helpers/get-age-string";

import "./UserInfoCard.scss";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "center"};
`;

const getAttitudeToUser = attitude => {
  let attitudeToUser = {};

  switch (attitude) {
    case 0:
      attitudeToUser = {
        color: "#c2ffc2",
        message: "You like this user",
        thumb: "fa-thumbs-up",
      };
      break;
    case 1:
      attitudeToUser = {
        color: "#ffc6c2",
        message: "You dislike this user",
        thumb: "fa-thumbs-down",
      };
      break;
    default:
      attitudeToUser = { color: "", message: "", thumb: "" };
  }
  return attitudeToUser;
};

const AttitudeToolTip = ({ message, thumb }) => {
  return (
    <Tooltip title={message} placement="bottom" TransitionComponent={Zoom}>
      <div className="retreat">
        <i className={`far ${thumb} Size`} />
      </div>
    </Tooltip>
  );
};

AttitudeToolTip.propTypes = {
  message: PropTypes.string,
  thumb: PropTypes.string,
};
AttitudeToolTip.defaultProps = {
  message: "",
  thumb: null,
};

const UserInfoCard = ({
  user: { id, username, gender, birthday, rating, attitude },
}) => {
  const attitudeToUser = getAttitudeToUser(attitude);

  return (
    <div
      className="user_info_card"
      style={{ backgroundColor: attitudeToUser.color }}
    >
      <div className="d-flex" style={{ alignItems: "center" }}>
        <Link to={`/user/${id}`}>
          <CustomAvatar size="little" userId={id} name={username} />
        </Link>

        <FlexContainer justify="space-between" direction="column">
          <Link to={`/user/${id}`}>{username}</Link>
          <div>{genders[gender]}</div>
          <div>Age: {getAge(birthday) || "not specified"}</div>
        </FlexContainer>

        <div className="ml-auto">
          <RatingAverage value={rating} direction="col" />

          {[0, 1].includes(attitude) && (
            <AttitudeToolTip
              message={attitudeToUser.message}
              thumb={attitudeToUser.thumb}
            />
          )}

          {/* {attitude === 0 && (
            <Tooltip
              title="You like this user"
              placement="bottom"
              TransitionComponent={Zoom}
            >
              <div className="retreat">
                <i className="far fa-thumbs-up Size" />
              </div>
            </Tooltip>
          )}
          {attitude === 1 && (
            <Tooltip
              title="You dislike this user"
              placement="bottom"
              TransitionComponent={Zoom}
            >
              <div className="retreat">
                <i className="far fa-thumbs-down Size" />
              </div>
            </Tooltip>
          )} */}
        </div>
      </div>
    </div>
  );
};

UserInfoCard.defaultProps = {
  user: {},
};

UserInfoCard.propTypes = {
  user: PropTypes.object,
};

export default UserInfoCard;
