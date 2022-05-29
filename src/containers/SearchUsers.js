import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { reset } from "redux-form";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";

import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import MainSearchInput from "../components/searchInput/MainSearchInput";
import {
  getSearchUsers,
  resetUsers,
  changeFilter,
} from "../actions/users/users-action";
import SpinnerWrapper from "./spinner";
import UserItemList from "../components/users/user-item";
// import UserSearchFilterWrapper from "./UserSearchFilterWrapper";
import history from "../history";

// import UserSearchPanel from "../components/users/UserSearchPanel";
// import getQueryStringByUsersFilter from "../components/helpers/userHelper";

const SearchContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
`;

const SearchUsers = ({
  users,
  getSearchUsersDispatch,
  resetUsersDispatch,
  resetFiltersDispatch,
  params,
  changeFilterDispatch,
}) => {
  const [search, setSearch] = useState("");
  const { push } = useHistory();
  const location = useLocation();

  const getUsers = page => getSearchUsersDispatch(page);

  const resetUrlQuery = () => {
    console.log(location.pathname);
    push(location.pathname);
  };

  const runSearch = value => {
    setSearch(value);
    // push(`${location.pathname}?keyWord=${search}`);
    // changeFilterDispatch(search);
  };

  useEffect(() => {
    push(`${location.pathname}?keyWord=${search}`);
    changeFilterDispatch(search);
    console.log("Search ----> ", search);
  }, [search]);

  useEffect(() => {
    getUsers(params);
  }, [params]);

  console.log(resetUsersDispatch);

  const onReset = () => {
    resetFiltersDispatch();
    const searchString = "?page=1";
    getSearchUsersDispatch(searchString);
    history.push(window.location.pathname + searchString);
  };
  console.log(onReset);

  const goPrevPage = () => {
    console.log("prev page");
  };

  const goNextPage = () => {
    console.log("next page");
  };

  // const filterdUsers = users.data.items.filter(user =>
  //   user.username.toLowerCase().includes(search.toLowerCase())
  // );

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
        <div className="row">
          <KeyboardArrowLeftIcon onClick={goPrevPage} />
          <div>page</div>
          <KeyboardArrowRightIcon onClick={goNextPage} />
        </div>
      </div>
    </div>
  );
};

// class SearchUsers extends Component {
//   componentWillMount() {
//     this.getUsers(this.props.params);
//   }

//   componentDidUpdate(prevProps) {
//     if (
//       prevProps.users.userSearchFilter !== this.props.users.userSearchFilter
//     ) {
//       this.getUsers(
//         getQueryStringByUsersFilter(this.props.users.userSearchFilter)
//       );
//     }
//   }

//   componentWillUnmount = () => {
//     this.props.resetUsersDispatch();
//   };

//   onReset = () => {
//     this.props.resetFiltersDispatch();
//     const searchString = "?page=1";
//     this.props.getSearchUsersDispatch(searchString);
//     history.push(window.location.pathname + searchString);
//   };

//   getUsers = page => this.props.getSearchUsersDispatch(page);

//   render() {
//     const { data } = this.props.users;

//     return (
//       <div className="row">
//         <div className="col-12">
//           <UserSearchFilterWrapper onReset={this.onReset} />
//           <SpinnerWrapper showContent={data}>
//             <UserItemList
//               users={this.props.users.data.items}
//               page={this.props.users.data.pageViewModel.pageNumber}
//               totalPages={this.props.users.data.pageViewModel.totalPages}
//               callback={this.getUsers}
//             />
//           </SpinnerWrapper>
//           <div className="row">
//             <KeyboardArrowLeftIcon />
//             <div>page</div>
//             <KeyboardArrowRightIcon />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

SearchUsers.defaultProps = {
  users: {},
  getSearchUsersDispatch: () => {},
  resetUsersDispatch: () => {},
  resetFiltersDispatch: () => {},
  params: "",
  changeFilterDispatch: () => {},
};

SearchUsers.propTypes = {
  users: PropTypes.object,
  getSearchUsersDispatch: PropTypes.func,
  resetUsersDispatch: PropTypes.func,
  resetFiltersDispatch: PropTypes.func,
  params: PropTypes.string,
  changeFilterDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => {
  return {
    getSearchUsersDispatch: page => dispatch(getSearchUsers(page)),
    resetUsersDispatch: () => dispatch(resetUsers()),
    resetFiltersDispatch: () => dispatch(reset("user-search-filter-form")),
    changeFilterDispatch: values => dispatch(changeFilter(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers);
