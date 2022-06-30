import React from "react";
import PropTypes from "prop-types";
import UserInfoCard from "../UserInfoCard/UserInfoCard";
import PagePagination from "../shared/PagePagination/PagePagination";
import "./Users.scss";
import { PAGINATION_PAGES_TRIGGER } from "../../constants/paginationConstants";

const UserItemList = ({ page, totalPages, users, callback }) => {
  const handlePageChange = pageEl => {
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

      {totalPages > PAGINATION_PAGES_TRIGGER && (
        <PagePagination
          currentPage={page}
          totalPages={totalPages}
          callback={handlePageChange}
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
