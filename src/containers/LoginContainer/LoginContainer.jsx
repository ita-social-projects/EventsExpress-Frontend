import { connect } from "react-redux";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Login from "../../components/Login/Login";
import login from "../../actions/login/login-action";

class LoginContainer extends Component {
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

LoginContainer.propTypes = {
  login: PropTypes.func,
};

LoginContainer.defaultProps = {
  login: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
