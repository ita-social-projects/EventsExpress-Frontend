import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { getSearchUsers, changeFilter } from "../../actions/users/users-action";
import MainSearchInput from "../searchInput/MainSearchInput";
import "./users.scss";

const SearchContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
`;

const UserSearchFilterWrapper = ({ changeFilterDispatch, onReset }) => {
  const [search, setSearch] = useState("");

  const runSearch = value => {
    console.log("value ----> ", value);
    setSearch(value);
  };

  const onSubmit = filters => {
    if (filters !== null) {
      changeFilterDispatch(filters);
    }
  };

  console.log(onSubmit);
  console.log(onReset);

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

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => {
  return {
    search: values => dispatch(getSearchUsers(values)),
    changeFilterDispatch: values => dispatch(changeFilter(values)),
  };
};

UserSearchFilterWrapper.defaultProps = {
  changeFilterDispatch: () => {},
  onReset: () => {},
};

UserSearchFilterWrapper.propTypes = {
  changeFilterDispatch: PropTypes.func,
  onReset: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserSearchFilterWrapper);
