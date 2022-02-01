import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../components/spinner";

function LocalSpinnerWrapper({ localCounter, children, showContent }) {
  return localCounter > 0 || !showContent ? <Spinner /> : children;
}

LocalSpinnerWrapper.propTypes = {
  showContent: PropTypes.func,
  children: PropTypes.object,
  localCounter: PropTypes.number,
};
LocalSpinnerWrapper.defaultProps = {
  showContent: () => {},
  children: {},
  localCounter: null,
};

const mapStateToProps = state => ({
  localCounter: state.requestLocalCount.localCounter,
});
export default connect(mapStateToProps)(LocalSpinnerWrapper);
