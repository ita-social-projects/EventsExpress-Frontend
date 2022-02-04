import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RecoverPassword from "../../components/recoverPassword/recoverPassword";
import recoverPassword from "../../actions/redactProfile/password-recover-action";

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
    recoverPassword: data => dispatch(recoverPassword(data)),
  };
};

RecoverPasswordContainer.propTypes = {
  status: PropTypes.object,
  recoverPassword: PropTypes.func,
};

RecoverPasswordContainer.defaultProps = {
  status: {},
  recoverPassword: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecoverPasswordContainer);
