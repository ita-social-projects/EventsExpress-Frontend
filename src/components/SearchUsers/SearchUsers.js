/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import { reset } from "redux-form";

import SearchInput from "../searchInput/SearchInput";
import { getSearchUsers, changeFilter } from "../../actions/users/users-action";
import SpinnerWrapper from "../../containers/spinner";
import UserItemList from "../users/UserItemList";
import "./SearchUsers.scss";

const SearchUsers = ({
  users,
  params,
  getSearchUsersDispatch,
  changeFilterDispatch,
  resetFiltersDispatch,
}) => {
  const [search, setSearch] = useState("");
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [page, setPage] = useState(1);

  const { totalPages } = users.data.pageViewModel;

  const getUsers = pageNumber => getSearchUsersDispatch(pageNumber);

  useEffect(() => {
    push(`${pathname}?keyWord=${search}`);
    changeFilterDispatch(search);
  }, [search]);

  useEffect(() => {
    getUsers(params);
  }, [params]);

  useEffect(() => {
    push(`${pathname}?keyWord=${search}&page=${page}`);
  }, [page]);

  const runSearch = value => {
    setSearch(value);
  };

  const resetFilter = () => {
    push(pathname);
    resetFiltersDispatch();
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <div
      className={`search_users_container ${
        users.data.items.length < 12 ? "small_container" : null
      }`}
    >
      <div className="search_users_input">
        <SearchInput
          searchText={search}
          searchFunc={runSearch}
          name="keyWord"
          resetForm={resetFilter}
        />
      </div>

      <SpinnerWrapper showContent={users.data}>
        <UserItemList
          users={users.data.items}
          page={users.data.pageViewModel.pageNumber}
          totalPages={users.data.pageViewModel.totalPages}
          callback={getUsers}
        />
      </SpinnerWrapper>

      {totalPages !== 1 && (
        <div className="search_users_pagination">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
          />
        </div>
      )}
    </div>
  );
};

SearchUsers.defaultProps = {
  users: {},
  getSearchUsersDispatch: () => {},
  changeFilterDispatch: () => {},
  resetFiltersDispatch: () => {},
  params: "",
};

SearchUsers.propTypes = {
  users: PropTypes.object,
  getSearchUsersDispatch: PropTypes.func,
  params: PropTypes.string,
  changeFilterDispatch: PropTypes.func,
  resetFiltersDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => {
  return {
    getSearchUsersDispatch: page => dispatch(getSearchUsers(page)),
    changeFilterDispatch: values => dispatch(changeFilter(values)),
    resetFiltersDispatch: () => dispatch(reset("main-search-form")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers);
