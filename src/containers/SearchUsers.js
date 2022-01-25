﻿import { connect } from "react-redux";
import React, { Component } from "react";
import { reset } from "redux-form";
import { get_SearchUsers, reset_users } from "../actions/users/users-action";
import SpinnerWrapper from "./spinner";
import UserItemList from "../components/users/user-item";
import UserSearchFilterWrapper from "./UserSearchFilterWrapper";
import history from "../history";
import { getQueryStringByUsersFilter } from "../components/helpers/userHelper";

class SearchUsers extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.users.userSearchFilter !== this.props.users.userSearchFilter
    ) {
      this.getUsers(
        getQueryStringByUsersFilter(this.props.users.userSearchFilter),
      );
    }
  }

  componentWillMount() {
    this.getUsers(this.props.params);
  }

  componentWillUnmount = () => {
    this.props.reset_users();
  };

  onReset = () => {
    this.props.reset_filters();
    const search_string = "?page=1";
    this.props.get_SearchUsers(search_string);
    history.push(window.location.pathname + search_string);
  };

  getUsers = page => this.props.get_SearchUsers(page);

  render() {
    const { data } = this.props.users;

    return (
      <>
        <div className="row">
          <div className="col-12">
            <UserSearchFilterWrapper onReset={this.onReset} />
            <SpinnerWrapper showContent={data != undefined}>
              <UserItemList
                users={this.props.users.data.items}
                page={this.props.users.data.pageViewModel.pageNumber}
                totalPages={this.props.users.data.pageViewModel.totalPages}
                callback={this.getUsers}
              />
            </SpinnerWrapper>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => {
  return {
    get_SearchUsers: page => dispatch(get_SearchUsers(page)),
    reset_users: () => dispatch(reset_users()),
    reset_filters: () => dispatch(reset("user-search-filter-form")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers);
