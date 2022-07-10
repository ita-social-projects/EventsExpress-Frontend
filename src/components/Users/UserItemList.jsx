import React from "react";
import PropTypes from "prop-types";
import UserInfoCard from "../UserInfoCard/UserInfoCard";
import "./Users.scss";

const UserItemList = ({ users }) => {
  return (
    <>
      <div className="user_item_list">
        {users.map(user => (
          <UserInfoCard
            key={user.id}
            id={user.id}
            username={user.username}
            gender={user.gender}
            birthday={user.birthday}
            rating={user.rating}
            attitude={user.attitude}
          />
        ))}
      </div>
    </>
  );
};

UserItemList.defaultProps = {
  users: [],
};

UserItemList.propTypes = {
  users: PropTypes.array,
};

export default UserItemList;
