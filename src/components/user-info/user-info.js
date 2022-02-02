import React from "react";
import PropTypes from "prop-types";
import CustomAvatar from "../avatar/custom-avatar";
import RatingAverage from "../rating/rating-average";

const UserInfo = ({ user }) => {
  return (
    <>
      <td className="align-middle">
        <CustomAvatar userId={user.id} name={user.username} />
      </td>

      <td className="align-middle">
        <RatingAverage value={user.rating} direction="col" />
      </td>

      <td className="align-middle">{user.email}</td>

      <td className="align-middle">{user.username}</td>
    </>
  );
};

UserInfo.defaultProps = {
  user: {},
};

UserInfo.propTypes = {
  user: PropTypes.object,
};

export default UserInfo;
