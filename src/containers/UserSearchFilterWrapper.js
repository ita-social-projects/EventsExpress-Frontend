import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserSearchFilter from "../components/users/UserSearchFilter";
import { getSearchUsers, changeFilter } from "../actions/users/users-action";

const UserSearchFilterWrapper = ({ changeFilterDispatch, onReset }) => {
  const onSubmit = filters => {
    if (filters !== null) {
      changeFilterDispatch(filters);
    }
  };
  return (
    <>
      <UserSearchFilter onSubmit={onSubmit} onReset={onReset} />
    </>
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
