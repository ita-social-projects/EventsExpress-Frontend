import React from "react";
import { connect } from "react-redux";
import { reset } from "redux-form";
import PropTypes from "prop-types";
import ChangePassword from "../../components/profile/editProfile/ChangePassword";
import changePassword from "../../actions/redactProfile/password-change-action";

class ChangePasswordContainer extends React.Component {
  submit = value => {
    return this.props.changePassword(value);
  };

  render() {
    return <ChangePassword onSubmit={this.submit} />;
  }
}

const mapStateToProps = state => {
  return state.changePassword;
};

const mapDispatchToProps = dispatch => {
  return {
    changePassword: date => dispatch(changePassword(date)),
    reset: () => {
      dispatch(reset("ChangePassword"));
    },
  };
};

ChangePasswordContainer.propTypes = {
  changePassword: PropTypes.func,
};

ChangePasswordContainer.defaultProps = {
  changePassword: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangePasswordContainer);
