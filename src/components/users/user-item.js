import React from "react";
import PropTypes from "prop-types";
import UserInfoCard from "../user-info/User-info-card";
import PagePagination from "../shared/pagePagination";

const UserItemList = ({ page, totalPages, users, callback }) => {
  const handlePageChange = pageEl => {
    callback(
      window.location.search.replace(/(page=)[0-9]+/gm, `page=${pageEl}`),
    );
  };

  const renderUsers = arr => {
    return arr.map(user => <UserInfoCard key={user.id} user={user} />);
  };

  return (
    <>
      {renderUsers(users)}
      {totalPages > 1 && (
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
