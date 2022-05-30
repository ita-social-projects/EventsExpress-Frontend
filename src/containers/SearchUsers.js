import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";

import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import MainSearchInput from "../components/searchInput/MainSearchInput";
import { getSearchUsers, changeFilter } from "../actions/users/users-action";
import SpinnerWrapper from "./spinner";
import UserItemList from "../components/users/UserItemList";

const SearchContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
`;

const PaginationButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  > div {
    margin: 0px 15px;
    font-size: 32px;
    border: none;
  }
  > svg {
    margin-top: 5px;
  }
`;

const SearchUsers = ({
  users,
  params,
  getSearchUsersDispatch,
  changeFilterDispatch,
}) => {
  const [search, setSearch] = useState("");
  const { push } = useHistory();
  const { pathname } = useLocation();

  const { pageNumber, hasPreviousPage, hasNextPage, totalPages } =
    users.data.pageViewModel;

  const getUsers = page => getSearchUsersDispatch(page);

  const resetUrlQuery = () => {
    push(pathname);
  };

  const runSearch = value => {
    setSearch(value);
  };

  useEffect(() => {
    push(`${pathname}?keyWord=${search}`);
    changeFilterDispatch(search);
  }, [search]);

  useEffect(() => {
    getUsers(params);
  }, [params]);

  const goPrevPage = () => {
    if (hasPreviousPage) {
      push(`${pathname}?keyWord=${search}&page=${pageNumber - 1}`);
    }
  };

  const goNextPage = () => {
    if (hasNextPage) {
      push(`${pathname}?keyWord=${search}&page=${pageNumber + 1}`);
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <SearchContainer>
          <MainSearchInput
            searchText={search}
            searchFunc={runSearch}
            name="keyWord"
            resetForm={resetUrlQuery}
          />
        </SearchContainer>

        <SpinnerWrapper showContent={users.data}>
          <UserItemList
            users={users.data.items}
            page={users.data.pageViewModel.pageNumber}
            totalPages={users.data.pageViewModel.totalPages}
            callback={getUsers}
          />
        </SpinnerWrapper>

        {totalPages !== 1 && (
          <PaginationButtonsContainer>
            <KeyboardArrowLeftIcon
              onClick={goPrevPage}
              style={{ fontSize: 32 }}
            />
            <div>{pageNumber}</div>
            <KeyboardArrowRightIcon
              onClick={goNextPage}
              style={{ fontSize: 32 }}
            />
          </PaginationButtonsContainer>
        )}
      </div>
    </div>
  );
};

SearchUsers.defaultProps = {
  users: {},
  getSearchUsersDispatch: () => {},
  params: "",
  changeFilterDispatch: () => {},
};

SearchUsers.propTypes = {
  users: PropTypes.object,
  getSearchUsersDispatch: PropTypes.func,
  params: PropTypes.string,
  changeFilterDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => {
  return {
    getSearchUsersDispatch: page => dispatch(getSearchUsers(page)),
    changeFilterDispatch: values => dispatch(changeFilter(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers);
