/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import { reset } from "redux-form";

import SearchInput from "../SearchInput/SearchInput";
import { getSearchUsers, changeFilter } from "../../actions/users/users-action";
import SpinnerContainer from "../../containers/SpinnerContainer/SpinnerContainer";
import UserItemList from "../Users/UserItemList";
import "./SearchUsers.scss";
import {
  DEFAULT_PAGE,
  PAGINATION_PAGES_TRIGGER,
} from "../../constants/paginationConstants";

const SearchUsers = ({
  users,
  pageView,
  params,
  getSearchUsersDispatch,
  changeFilterDispatch,
  resetFiltersDispatch,
}) => {
  const [search, setSearch] = useState("");
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [page, setPage] = useState(DEFAULT_PAGE);

  const { totalPages, pageNumber } = pageView;

  const getUsers = pageToGetUsers => getSearchUsersDispatch(pageToGetUsers);

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

  const resetFilter = () => {
    push(pathname);
    resetFiltersDispatch();
  };

  const runSearch = value => {
    setSearch(value);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <div className="search_users_container">
      <div className="search_users_input">
        <SearchInput
          searchText={search}
          searchFunc={runSearch}
          name="keyWord"
          resetForm={resetFilter}
        />
      </div>

      <SpinnerContainer showContent={users !== null}>
        <UserItemList
          users={users}
          page={pageNumber}
          totalPages={totalPages}
          callback={getUsers}
        />
      </SpinnerContainer>

      {totalPages > PAGINATION_PAGES_TRIGGER && (
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
  users: [],
  pageView: {},
  getSearchUsersDispatch: () => {},
  changeFilterDispatch: () => {},
  resetFiltersDispatch: () => {},
  params: "",
};

SearchUsers.propTypes = {
  pageView: PropTypes.object,
  users: PropTypes.array,
  getSearchUsersDispatch: PropTypes.func,
  params: PropTypes.string,
  changeFilterDispatch: PropTypes.func,
  resetFiltersDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  users: state.users.items,
  pageView: state.users.pageViewModel,
});

const mapDispatchToProps = dispatch => {
  return {
    getSearchUsersDispatch: page => dispatch(getSearchUsers(page)),
    changeFilterDispatch: values => dispatch(changeFilter(values)),
    resetFiltersDispatch: () => dispatch(reset("main-search-form")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers);
