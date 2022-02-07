import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ChangeAvatar from "../../components/profile/editProfile/change-avatar";
import changeAvatar from "../../actions/redactProfile/avatar-change-action";
import AuthComponent from "../../security/authComponent";

class ChangeAvatarWrapper extends Component {
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

ChangeAvatarWrapper.propTypes = {
  userId: PropTypes.string,
  changeAvatar: PropTypes.func,
};
ChangeAvatarWrapper.defaultProps = {
  userId: "",
  changeAvatar: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangeAvatarWrapper);
