import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers, resetUsers } from "../../actions/users/users-action";
import Users from "../../components/Users/Users";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import UserFilterContainer from "../UserFilterContainer/UserFilterContainer";

// TODO Refactor class component
class UsersContainer extends Component {
  componentDidMount() {
    this.getUsers(this.props.location.search);
  }

  componentWillUnmount = () => {
    this.props.resetUsers();
  };

  getUsers = page => this.props.getUsers(page);

  render() {
    const {
      users: { data },
      location,
    } = this.props;

    return (
      <div className="row">
        <div className="col-9">
          <SpinnerContainer showContent={data !== undefined}>
            <Users
              users={data.items}
              page={data.pageViewModel.pageNumber}
              totalPages={data.pageViewModel.totalPages}
              callback={this.getUsers}
            />
          </SpinnerContainer>
        </div>
        <div className="col-3">
          <UserFilterContainer location={location} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => {
  return {
    getUsers: page => dispatch(getUsers(page)),
    resetUsers: () => dispatch(resetUsers()),
  };
};
UsersContainer.propTypes = {
  location: PropTypes.object,
  users: PropTypes.object,
  resetUsers: PropTypes.func,
  getUsers: PropTypes.func,
};

UsersContainer.defaultProps = {
  location: {},
  users: {},
  resetUsers: () => {},
  getUsers: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
