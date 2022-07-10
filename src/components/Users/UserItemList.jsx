import React from "react";
import PropTypes from "prop-types";
import UserInfoCard from "../UserInfoCard/UserInfoCard";
import "./Users.scss";

const UserItemList = ({ users }) => {
  return (
    <>
      <div className="user_item_list">
        {users.map(user => (
          <UserInfoCard key={user.id} {...user} />
        ))}
      </div>
    </>
  );
};

UserItemList.defaultProps = {
  callback: () => {},
  totalPages: null,
  page: null,
  users: [],
};

UserItemList.propTypes = {
  callback: PropTypes.func,
  totalPages: PropTypes.number,
  page: PropTypes.number,
  users: PropTypes.array,
};

export default UserItemList;
