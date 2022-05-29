import React, { useState } from "react";
import styled from "styled-components";

import MainSearchInput from "../searchInput/MainSearchInput";
import "./users.scss";

const SearchContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
`;

const UserSearchFilter = () => {
  const [search, setSearch] = useState("");

  const runSearch = value => {
    console.log("value ----> ", value);
    setSearch(value);
  };

  return (
    <SearchContainer>
      <MainSearchInput
        searchText={search}
        searchFunc={runSearch}
        inputName="keyWord"
      />
    </SearchContainer>
  );
};

UserSearchFilter.defaultProps = {
  // handleSubmit: () => {},
  // pristine: false,
  // onReset: () => {},
  // submitting: false,
};

UserSearchFilter.propTypes = {
  // handleSubmit: PropTypes.func,
  // pristine: PropTypes.bool,
  // onReset: PropTypes.func,
  // submitting: PropTypes.bool,
};

export default UserSearchFilter;
