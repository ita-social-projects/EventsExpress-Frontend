import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { blockUser, unblockUser } from "../actions/user/user-action";
import UserInfo from "../components/user-info";
import UserBlock from "../components/user-info/user-block";
import UserRoleWrapper from "./user-role";

class UserInfoWrapper extends Component {
  constructor(props) {
    super(props);
    this.isCurrentUser = props.user.id === props.currentUser;
  }

  block = () => this.props.block(this.props.user.id);

  unblock = () => this.props.unblock(this.props.user.id);

  render() {
    const { user, editedUser } = this.props;

    return (
      <tr className={user.isBlocked ? "bg-warning" : ""}>
        <UserInfo key={user.id} user={user} />

        <UserRoleWrapper
          key={this.props.key}
          user={user}
          isCurrentUser={this.isCurrentUser}
          isEdit={user.id === editedUser}
        />

        <UserBlock
          user={user}
          isCurrentUser={this.isCurrentUser}
          block={this.block}
          unblock={this.unblock}
        />
      </tr>
    );
  }
}

UserInfoWrapper.defaultProps = {
  block: () => {},
  unblock: () => {},
  currentUser: null,
  editedUser: null,
  user: {},
  key: null,
};

UserInfoWrapper.propTypes = {
  block: PropTypes.func,
  unblock: PropTypes.func,
  currentUser: PropTypes.number,
  editedUser: PropTypes.number,
  user: PropTypes.object,
  key: PropTypes.number,
};

const mapStateToProps = state => ({
  currentUser: state.user.id,
  editedUser: state.users.editedUser,
  roles: state.roles.data,
});

const mapDispatchToProps = dispatch => {
  return {
    block: id => dispatch(blockUser(id)),
    unblock: id => dispatch(unblockUser(id)),
  };
};

UserInfoWrapper.propTypes = {
  user: PropTypes.object,
  currentUser: PropTypes.object,
  block: PropTypes.func,
  unblock: PropTypes.func,
  editedUser: PropTypes.number,
  key: PropTypes.number,
};

UserInfoWrapper.defaultProps = {
  user: {},
  currentUser: {},
  block: () => {},
  unblock: () => {},
  editedUser: null,
  key: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoWrapper);
