import React from "react";
import PropTypes from "prop-types";
import UserInfoContainer from "../../containers/UserInfoContainer/UserInfoContainer";
import PagePagination from "../shared/PagePagination/PagePagination";
import "./Users.scss";
import { PAGINATION_PAGES_TRIGGER } from "../../constants/paginationConstants";

const Users = ({ page, totalPages, users, callback }) => {
  const handlePageChange = pageEl => {
    callback(
      window.location.search.replace(/(page=)[0-9]+/gm, `page=${pageEl}`),
    );
  };

  const renderUsers = arr => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.id;
    const key = user => user.id + user.isBlocked + user.roles.reduce(reducer);
    return arr.map(user => <UserInfoContainer key={key(user)} user={user} />);
  };
  return (
    <>
      <table className="table">
        <tbody>{renderUsers(users)}</tbody>
      </table>
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

Users.defaultProps = {
  callback: () => {},
  totalPages: null,
  page: null,
  users: [],
};

Users.propTypes = {
  callback: PropTypes.func,
  totalPages: PropTypes.number,
  page: PropTypes.number,
  users: PropTypes.array,
};

export default Users;
