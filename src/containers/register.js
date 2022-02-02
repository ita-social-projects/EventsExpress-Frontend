import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Register from "../components/register";
import register from "../actions/register/register-action";

class RegisterWrapper extends React.Component {
  componentDidUpdate() {
    if (!this.props.registerError && this.props.isRegisterSuccess) {
      this.props.handleClose();
    }
  }

  submit = async values => {
    await this.props.register(values.email, values.password);
  };

  render() {
    return (
      <>
        <Register onSubmit={this.submit} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return state.register;
};

const mapDispatchToProps = dispatch => {
  return {
    register: (email, password) => dispatch(register(email, password)),
  };
};
RegisterWrapper.propTypes = {
  registerError: PropTypes.bool,
  isRegisterSuccess: PropTypes.bool,
  handleClose: PropTypes.func,
  register: PropTypes.func,
};

RegisterWrapper.defaultProps = {
  registerError: false,
  isRegisterSuccess: false,
  handleClose: () => {},
  register: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterWrapper);
