import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ChangeAvatar from "../../components/Profile/EditProfile/ChangeAvatar";
import changeAvatar from "../../actions/editProfile/avatarChangeAction";
import AuthComponent from "../../components/AuthComponent/AuthComponent";

// TODO Refactor class component
class ChangeAvatarContainer extends Component {
  submit = values => {
    return this.props.changeAvatar(values);
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

const mapDispatchToProps = dispatch => {
  return {
    changeAvatar: data => dispatch(changeAvatar(data)),
  };
};

ChangeAvatarContainer.propTypes = {
  userId: PropTypes.string,
  changeAvatar: PropTypes.func,
};
ChangeAvatarContainer.defaultProps = {
  userId: "",
  changeAvatar: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangeAvatarContainer);
