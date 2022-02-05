import { connect } from "react-redux";
import React, { Component } from "react";
import { reset } from "redux-form";
import PropTypes from "prop-types";
import { getSearchUsers, resetUsers } from "../actions/users/users-action";
import SpinnerWrapper from "./spinner";
import UserItemList from "../components/users/user-item";
import UserSearchFilterWrapper from "./UserSearchFilterWrapper";
import history from "../history";
import getQueryStringByUsersFilter from "../components/helpers/userHelper";

class SearchUsers extends Component {
  componentWillMount() {
    this.getUsers(this.props.params);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.users.userSearchFilter !== this.props.users.userSearchFilter
    ) {
      this.getUsers(
        getQueryStringByUsersFilter(this.props.users.userSearchFilter),
      );
    }
  }

  componentWillUnmount = () => {
    this.props.resetUsersDispatch();
  };

  onReset = () => {
    this.props.resetFiltersDispatch();
    const searchString = "?page=1";
    this.props.getSearchUsersDispatch(searchString);
    history.push(window.location.pathname + searchString);
  };

  getUsers = page => this.props.getSearchUsersDispatch(page);

  render() {
    const { data } = this.props.users;

    return (
      <div className="row">
        <div className="col-12">
          <UserSearchFilterWrapper onReset={this.onReset} />
          <SpinnerWrapper showContent={data}>
            <UserItemList
              users={this.props.users.data.items}
              page={this.props.users.data.pageViewModel.pageNumber}
              totalPages={this.props.users.data.pageViewModel.totalPages}
              callback={this.getUsers}
            />
          </SpinnerWrapper>
        </div>
      </div>
    );
  }
}

SearchUsers.defaultProps = {
  users: {},
  getSearchUsersDispatch: () => {},
  resetUsersDispatch: () => {},
  resetFiltersDispatch: () => {},
  params: "",
};

SearchUsers.propTypes = {
  users: PropTypes.object,
  getSearchUsersDispatch: PropTypes.func,
  resetUsersDispatch: PropTypes.func,
  resetFiltersDispatch: PropTypes.func,
  params: PropTypes.string,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => {
  return {
    getSearchUsersDispatch: page => dispatch(getSearchUsers(page)),
    resetUsersDispatch: () => dispatch(resetUsers()),
    resetFiltersDispatch: () => dispatch(reset("user-search-filter-form")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers);
