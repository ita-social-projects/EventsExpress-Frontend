import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { parse } from "query-string";
import UsersFilters from "../components/users/UsersFilters";
import history from "../history";
import {
  accountStatus,
  getUsers,
  getCount,
  initialConnection,
  closeConnection,
  changeStatus,
} from "../actions/users/users-action";

class UsersFilterWrapper extends Component {
  componentDidMount() {
    const { Unblocked, Blocked } = parse(this.props.location.search);
    let status;

    if (Unblocked) {
      status = accountStatus.Activated;
    } else if (Blocked) {
      status = accountStatus.Blocked;
    } else {
      status = accountStatus.All;
    }

    this.props.changeStatus(status);
    this.props.getCount(status);
    this.props.initialConnection();
  }

  componentWillUnmount = () => {
    this.props.closeConnection();
  };

  onSubmit = filters => {
    let searchString = "?page=1";
    let status;

    if (filters != null) {
      if (filters.search != null) {
        searchString += `&keyWord=${filters.search}`;
      }
      if (filters.role != null) {
        searchString += `&Role=${filters.role}`;
      }

      switch (filters.status) {
        case "blocked":
          searchString += `&Blocked=${true}`;
          status = accountStatus.Blocked;
          break;
        case "active":
          searchString += `&Unblocked=${true}`;
          status = accountStatus.Activated;
          break;
        default:
          searchString += `&All=${true}`;
          status = accountStatus.All;
      }

      this.props.changeStatus(status);
      this.props.getCount(status);

      if (filters.PageSize != null) {
        searchString += `&PageSize=${filters.PageSize}`;
      }
    }

    this.props.search(searchString);
    history.push(window.location.pathname + searchString);
  };

  renderCount = status => {
    const { count } = this.props;
    let label;

    switch (status) {
      case accountStatus.Activated:
        label = "Active users:";
        break;
      case accountStatus.Blocked:
        label = "Blocked users:";
        break;
      default:
        label = "All users:";
    }

    return (
      <>
        <span className="ml-2">
          {label} {count}
        </span>
        <br />
      </>
    );
  };

  render() {
    const { status } = this.props;

    return (
      <>
        <UsersFilters onSubmit={this.onSubmit} />
        {this.renderCount(status)}
      </>
    );
  }
}

const mapStateToProps = state => ({
  status: state.users.status,
  count: state.users.count,
});

const mapDispatchToProps = dispatch => {
  return {
    changeStatus: status => dispatch(changeStatus(status)),
    closeConnection: () => dispatch(closeConnection()),
    initialConnection: () => dispatch(initialConnection()),
    get_count: status => dispatch(getCount(status)),
    search: values => dispatch(getUsers(values)),
  };
};

UsersFilterWrapper.propTypes = {
  status: PropTypes.object,
  count: PropTypes.number,
  search: PropTypes.func,
  changeStatus: PropTypes.func,
  getCount: PropTypes.func,
  initialConnection: PropTypes.func,
  closeConnection: PropTypes.func,
  location: PropTypes.object,
};
UsersFilterWrapper.defaultProps = {
  status: {},
  count: null,
  search: () => {},
  changeStatus: () => {},
  getCount: () => {},
  initialConnection: () => {},
  closeConnection: () => {},
  location: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersFilterWrapper);
