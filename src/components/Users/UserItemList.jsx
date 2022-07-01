import React from "react";
import PropTypes from "prop-types";
import Pagination from "@material-ui/lab/Pagination";
import UserInfoCard from "../UserInfoCard/UserInfoCard";
import "./Users.scss";

const UserItemList = ({ page, totalPages, users, callback }) => {
  const handlePageChange = (_, pageEl) => {
    callback(
      // eslint-disable-next-line
      window.location.search.replace(/(page=)[0-9]+/gm, `page=${pageEl}`)
    );
  };

  return (
    <>
      <div className="user_item_list">
        {users.map(user => (
          <UserInfoCard key={user.id} {...user} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          page={page}
          count={totalPages}
          onChange={handlePageChange}
        />
      )}
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
