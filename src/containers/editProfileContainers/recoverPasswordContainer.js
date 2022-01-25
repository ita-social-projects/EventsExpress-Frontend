import React from "react";
import { connect } from "react-redux";
import RecoverPassword from "../../components/recoverPassword/recoverPassword";
import recover_Password from "../../actions/redactProfile/password-recover-action";

class RecoverPasswordContainer extends React.Component {
  submit = value => {
    return this.props.recoverPassword(value);
  };

  render() {
    const { status } = this.props;

    return (
      <>
        <RecoverPassword onSubmit={this.submit} />
        {status.isError !== undefined && !status.isError && (
          <p className="text-success text-center">
            New password sent by your email.
            <br />
            Please use it to sign in.
          </p>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.recoverPassword,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    recoverPassword: data => dispatch(recover_Password(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecoverPasswordContainer);
