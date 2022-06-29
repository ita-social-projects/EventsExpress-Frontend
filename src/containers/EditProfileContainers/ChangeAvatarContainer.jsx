import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ChangeAvatar from "../EditProfileContainer/ChangeAvatarContainer";
import changeAvatar from "../../actions/redactProfile/avatar-change-action";
import AuthComponent from "../../security/authComponent";

// TODO Refactor class component
class ChangeAvatarContainer extends Component {
  submit = values => {
    return this.props.changeAvatarAction(values);
  };

  render() {
    return (
      <AuthComponent>
        <ChangeAvatar
          initialValues={{ userId: this.props.userId }}
          onSubmit={this.submit}
        />
      </AuthComponent>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.user.id,
});

const mapDispatchToProps = dispatch => ({
  changeAvatarAction: data => dispatch(changeAvatar(data)),
});

ChangeAvatarContainer.propTypes = {
  userId: PropTypes.string,
  changeAvatarAction: PropTypes.func,
};
ChangeAvatarContainer.defaultProps = {
  userId: "",
  changeAvatarAction: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangeAvatarContainer);
