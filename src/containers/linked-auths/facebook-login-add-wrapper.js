import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { facebookLoginAdd } from "../../actions/redactProfile/linked-auths-add-action";
import { setErrorAlert } from "../../actions/alert-action";
import "../css/Auth.css";

class LoginFacebook extends Component {
  facebookResponseHandler = response => {
    if (
      typeof response === "undefined" ||
      typeof response.email === "undefined"
    ) {
      this.props.setErrorAlert("Please add email to your google account!");
      return;
    }
    this.props.facebookLoginAdd(response.email);
  };

  render() {
    return (
      <div>
        <FacebookLogin
          appId={this.props.config.facebookClientId}
          autoLoad={false}
          fields="email"
          callback={this.facebookResponseHandler}
          cssClass="btnFacebook"
          icon={<i className="fab fa-facebook fa-lg" />}
          textButton="&nbsp;&nbsp;Log in"
          version="3.1"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
  };
};

const mapDispatchToProps = dispatch => ({
  facebookLoginAdd: email => dispatch(facebookLoginAdd(email)),
  setErrorAlert: msg => dispatch(setErrorAlert(msg)),
});

LoginFacebook.propTypes = {
  setErrorAlert: PropTypes.func,
  facebookLoginAdd: PropTypes.func,
  config: PropTypes.object,
};

LoginFacebook.defaultProps = {
  setErrorAlert: () => {},
  facebookLoginAdd: () => {},
  config: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFacebook);
