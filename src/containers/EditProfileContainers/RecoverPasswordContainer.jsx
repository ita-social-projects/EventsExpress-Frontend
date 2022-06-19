import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RecoverPassword from "../../components/RecoverPassword/RecoverPassword";
import recoverPassword from "../../actions/redactProfile/password-recover-action";

const RecoverPasswordContainer = ({
  recoverPasswordDispatch,
  status,
  handleRecoverClose,
}) => {
  const handleRecoverSubmit = email => {
    return recoverPasswordDispatch(email);
  };

  return (
    <RecoverPassword
      handleRecoverClose={handleRecoverClose}
      onSubmit={handleRecoverSubmit}
      status={status}
    />
  );
};

const mapStateToProps = state => {
  return {
    status: state.recoverPassword,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    recoverPasswordDispatch: data => dispatch(recoverPassword(data)),
  };
};

RecoverPasswordContainer.propTypes = {
  handleRecoverClose: PropTypes.func,
  status: PropTypes.object,
  recoverPasswordDispatch: PropTypes.func,
};

RecoverPasswordContainer.defaultProps = {
  handleRecoverClose: () => {},
  status: {
    isError: false,
  },
  recoverPasswordDispatch: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecoverPasswordContainer);
