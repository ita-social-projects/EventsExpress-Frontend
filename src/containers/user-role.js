import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserRoleDisplay from "../components/user-info/user-role-display";
import UserRoleEdit from "../components/user-info/user-role-edit";
import { changeUserRole, setEditedUser } from "../actions/user/user-action";

class UserRoleWrapper extends Component {
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
UserRoleWrapper.propTypes = {
  user: PropTypes.object,
  setModeEdit: PropTypes.func,
  setNewRole: PropTypes.func,
  setModeDisplay: PropTypes.func,
  isCurrentUser: PropTypes.bool,
  isEdit: PropTypes.bool,
};

UserRoleWrapper.defaultProps = {
  user: {},
  setNewRole: () => {},
  setModeDisplay: () => {},
  setModeEdit: () => {},
  isCurrentUser: false,
  isEdit: false,
};

const mapDispatchToProps = (dispatch, props) => ({
  set_new_role: (uid, role) => dispatch(changeUserRole(uid, role)),
  set_mode_display: () => dispatch(setEditedUser()),
  set_mode_edit: () => dispatch(setEditedUser(props.user.id)),
});

export default connect(null, mapDispatchToProps)(UserRoleWrapper);
