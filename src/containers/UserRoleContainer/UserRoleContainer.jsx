import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserRoleDisplay from "../../components/UserInfo/UserRoleDisplay";
import UserRoleEdit from "../../components/UserInfo/UserRoleEdit";
import { changeUserRole, setEditedUser } from "../../actions/user/user-action";

// TODO Refactor class component
class UserRoleContainer extends Component {
  saveChanges = async values => {
    const { roles } = values;
    await this.props.setNewRole(this.props.user.id, roles);
    this.props.setModeDisplay();
  };

  render() {
    const { user, isCurrentUser, setModeDisplay, setModeEdit } = this.props;

    return this.props.isEdit ? (
      <UserRoleEdit
        initialValues={user}
        onSubmit={this.saveChanges}
        cancel={setModeDisplay}
      />
    ) : (
      <UserRoleDisplay
        user={user}
        isCurrentUser={isCurrentUser}
        callback={setModeEdit}
      />
    );
  }
}
UserRoleContainer.propTypes = {
  user: PropTypes.object,
  setModeEdit: PropTypes.func,
  setNewRole: PropTypes.func,
  setModeDisplay: PropTypes.func,
  isCurrentUser: PropTypes.bool,
  isEdit: PropTypes.bool,
};

UserRoleContainer.defaultProps = {
  user: {},
  setNewRole: () => {},
  setModeDisplay: () => {},
  setModeEdit: () => {},
  isCurrentUser: false,
  isEdit: false,
};

const mapDispatchToProps = (dispatch, props) => ({
  setNewRole: (uid, role) => dispatch(changeUserRole(uid, role)),
  setModeDisplay: () => dispatch(setEditedUser()),
  setModeEdit: () => dispatch(setEditedUser(props.user.id)),
});

export default connect(null, mapDispatchToProps)(UserRoleContainer);
