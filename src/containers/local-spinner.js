/* eslint-disable no-debugger */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../components/spinner";

function LocalSpinnerWrapper({ localCounter, children, showContent }) {
  return localCounter > 0 || !showContent ? <Spinner /> : children;
}

LocalSpinnerWrapper.propTypes = {
  showContent: PropTypes.bool,
  children: PropTypes.array,
  localCounter: PropTypes.number,
};
LocalSpinnerWrapper.defaultProps = {
  showContent: false,
  children: [],
  localCounter: null,
};

const mapStateToProps = state => ({
  localCounter: state.requestLocalCount.localCounter,
});
export default connect(mapStateToProps)(LocalSpinnerWrapper);
