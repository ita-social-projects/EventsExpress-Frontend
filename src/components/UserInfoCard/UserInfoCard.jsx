import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import genders from "../../constants/genderConstants";
import LABELS from "../../constants/labelConstants";
import { ATTITUDE_TYPES } from "../../constants/userAttitudesConstants";
import CustomAvatar from "../avatar/custom-avatar";
import RatingAverage from "../rating/rating-average";
import defineUserAge from "../helpers/defineUserAge";
import getAttitudeToUser from "../helpers/getAttitudeToUser";
import AttitudeToolTip from "./AttitudeToolTip/AttitudeToolTip";
import "./UserInfoCard.scss";

const UserInfoCard = ({ id, username, gender, birthday, rating, attitude }) => {
  const attitudeToUser = getAttitudeToUser(attitude);
  const linkToUser = `/user/${id}`;
  const userAge = defineUserAge(birthday);
  const userGender = genders[gender] || LABELS.NOT_SPECIFIED;

  return (
    <div className={`user_info_card ${attitudeToUser.bg}`}>
      <Link to={linkToUser} className="user_avatar">
        <CustomAvatar size="medium" userId={id} name={username} />
      </Link>

      <div className="user_main_info">
        <Link to={linkToUser}>{username}</Link>
        <div className="user_info_item">{userGender}</div>
        <div className="user_info_item">{userAge}</div>
      </div>

      <div className="user_rating">
        <RatingAverage value={rating} direction="col" />
        {ATTITUDE_TYPES.includes(attitude) && (
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
  id: null,
  username: null,
  birthday: "",
  attitude: 2,
  rating: 0,
  gender: null,
};

UserInfoCard.propTypes = {
  id: PropTypes.string,
  username: PropTypes.string,
  birthday: PropTypes.string,
  attitude: PropTypes.number,
  rating: PropTypes.number,
  gender: PropTypes.string,
};

export default UserInfoCard;
