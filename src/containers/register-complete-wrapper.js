import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RegisterBindAccount from "../components/register/register-bind-account";
import registerBindAccount from "../actions/register/register-bind-account-action";
import RegisterComplete from "../components/register/register-complete";
import registerComplete from "../actions/register/register-complete-action";

class RegisterCompleteWrapper extends Component {
  constructor(props) {
    super(props);
    this.profile = this.props.location?.state?.profile || null;
  }

  render() {
    return (
      <>
        {this.profile !== null && (
          <RegisterBindAccount onSubmit={this.props.bind} />
        )}
        <RegisterComplete onSubmit={this.props.submit} />
      </>
    );
  }
}
RegisterCompleteWrapper.propTypes = {
  location: PropTypes.object,
  bind: PropTypes.func,
  submit: PropTypes.func,
};

RegisterCompleteWrapper.defaultProps = {
  location: {},
  bind: () => {},
  submit: () => {},
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  bind: data => dispatch(registerBindAccount(data)),
  submit: data => dispatch(registerComplete(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterCompleteWrapper);
