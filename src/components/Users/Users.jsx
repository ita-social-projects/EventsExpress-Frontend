import React from "react";
import PropTypes from "prop-types";
import Pagination from "@material-ui/lab/Pagination";
import UserInfoContainer from "../../containers/UserInfoContainer/UserInfoContainer";
import "./Users.scss";

const Users = ({ page, totalPages, users, callback }) => {
  const handlePageChange = (_, pageEl) => {
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
