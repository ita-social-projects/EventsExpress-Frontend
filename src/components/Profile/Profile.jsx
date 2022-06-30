import React, { useState } from "react";
import PropTypes from "prop-types";
import ChangePasswordContainer from "../../containers/EditProfileContainers/ChangePasswordContainer";
import GENDERS from "../../constants/gendersVarietyConstants";
import ProfileItem from "./ProfileItem";
import useProfileData from "./profileData";
import "./Profile.scss";

const Profile = ({
  name,
  gender,
  birthday,
  categories,
  notificationTypes,
  canChangePassword,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const profileItems = useProfileData(
    name,
    GENDERS[gender],
    birthday,
    categories,
    notificationTypes,
  );

  return (
    <div className="user-profile-wrapper">
      {profileItems.map(item => (
        <ProfileItem
          key={item.panelId}
          item={item}
          handleChange={handleChange}
          expanded={expanded}
        />
      ))}
      {canChangePassword && <ChangePasswordContainer />}
    </div>
  );
};

Profile.defaultProps = {
  name: "",
  gender: null,
  birthday: "",
  categories: [],
  notificationTypes: [],
  canChangePassword: false,
};

Profile.propTypes = {
  name: PropTypes.string,
  // TODO: CHANGE IT oneOfType ON ONE PROP TYPE
  gender: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  birthday: PropTypes.string,
  categories: PropTypes.array,
  notificationTypes: PropTypes.array,
  canChangePassword: PropTypes.bool,
};

export default Profile;
