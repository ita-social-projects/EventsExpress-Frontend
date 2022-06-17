import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import GoogleLogin from "../../components/Login/GoogleLogin/GoogleLogin";
import { googleLoginAdd } from "../../actions/editProfile/linkedAuthsAddAction";
import { setErrorAlert } from "../../actions/alert/alertAction";
import "./LinkedAuth.scss";

// TODO Refactor class component
class AddGoogleLoginContainer extends Component {
  googleResponseHandler = response => {
    if (typeof response.profileObj.email === "undefined") {
      this.props.setErrorAlert("Please add email to your google account!");
    }

    this.props.googleLoginAdd(response.tokenId, response.profileObj.email);
  };

  render() {
    return (
      <GoogleLogin
        googleClientId={this.props.config.googleClientId}
        googleResponseHandler={this.googleResponseHandler}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
  };
};

const mapDispatchToProps = dispatch => ({
  googleLoginAdd: (tokenId, email) => dispatch(googleLoginAdd(tokenId, email)),
  setErrorAlert: msg => dispatch(setErrorAlert(msg)),
});

AddGoogleLoginContainer.propTypes = {
  setErrorAlert: PropTypes.func,
  config: PropTypes.object,
  googleLoginAdd: PropTypes.func,
};
AddGoogleLoginContainer.defaultProps = {
  setErrorAlert: () => {},
  config: {},
  googleLoginAdd: () => {},
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddGoogleLoginContainer),
);
