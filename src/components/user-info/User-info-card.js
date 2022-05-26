import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import genders from "../../constants/GenderConstants";
import CustomAvatar from "../avatar/custom-avatar";
import RatingAverage from "../rating/rating-average";
import getAge from "../helpers/get-age-string";

import AttitudeToolTip from "./AttitudeToolTip/AttitudeToolTip";
import getAttitudeToUser from "./getUserAttitude";

import "./UserInfoCard.scss";

const UserInfoCard = ({
  user: { id, username, gender, birthday, rating, attitude },
}) => {
  const attitudeToUser = getAttitudeToUser(attitude);
  const linkToUser = `/user/${id}`;
  const userAge = `Age: ${getAge(birthday)}` || "Not Specified";

  return (
    <div
      className="user_info_card"
      style={{ backgroundColor: attitudeToUser.color }}
    >
      <Link to={linkToUser} className="user_avatar">
        <CustomAvatar size="medium" userId={id} name={username} />
      </Link>

      <div className="user_main_info">
        <Link to={linkToUser}>{username}</Link>
        <div className="user_info_item">{genders[gender]}</div>
        <div className="user_info_item">{userAge}</div>
      </div>

      <div className="user_rating">
        <RatingAverage value={rating} direction="col" />

        {[0, 1].includes(attitude) && (
          <AttitudeToolTip
            message={attitudeToUser.message}
            thumb={attitudeToUser.thumb}
          />
        )}
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
