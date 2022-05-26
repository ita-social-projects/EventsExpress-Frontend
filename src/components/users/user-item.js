import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import UserInfoCard from "../user-info/User-info-card";
import PagePagination from "../shared/pagePagination";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
`;

const UserItemList = ({ page, totalPages, users, callback }) => {
  const handlePageChange = pageEl => {
    callback(
      window.location.search.replace(/(page=)[0-9]+/gm, `page=${pageEl}`),
    );
  };

  return (
    <>
      <GridLayout>
        {users.map(user => (
          <UserInfoCard key={user.id} user={user} />
        ))}
      </GridLayout>

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
