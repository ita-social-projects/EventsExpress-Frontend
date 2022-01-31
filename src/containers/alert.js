import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MySnackbar from "../components/helpers/Alert";
import { setAlertOpen } from "../actions/alert-action";

const AlertContainer = ({ open, close, alert }) => {
  return <MySnackbar open={open} onClose={close} alert={alert} />;
};

AlertContainer.defaultProps = {
  close: () => {},
  alert: {},
  open: false,
};

AlertContainer.propTypes = {
  close: PropTypes.func,
  alert: PropTypes.object,
  open: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    alert: state.alert,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    close: () => dispatch(setAlertOpen(false)),
    open: () => dispatch(setAlertOpen(true)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
