import { connect } from "react-redux";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Login from "../components/login";
import login from "../actions/login/login-action";

class LoginWrapper extends Component {
  submit = values => this.props.login(values.email, values.password);

  render() {
    return <Login onSubmit={this.submit} />;
  }
}

const mapStateToProps = state => {
  return {
    loginStatus: state.login,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password)),
  };
};

LoginWrapper.propTypes = {
  login: PropTypes.func,
};

LoginWrapper.defaultProps = {
  login: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginWrapper);
