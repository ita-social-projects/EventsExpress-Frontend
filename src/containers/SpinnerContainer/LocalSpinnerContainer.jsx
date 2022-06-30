/* eslint-disable no-debugger */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import { DEFAULT_COUNT_VALUE } from "../../constants/constants";

// TODO Drop and use sinple Spinner instead
function LocalSpinnerContainer({ localCounter, children, showContent }) {
  return localCounter > DEFAULT_COUNT_VALUE || !showContent ? (
    <Spinner />
  ) : (
    children
  );
}

LocalSpinnerContainer.propTypes = {
  showContent: PropTypes.bool,
  children: PropTypes.array,
  localCounter: PropTypes.number,
};
LocalSpinnerContainer.defaultProps = {
  showContent: false,
  children: [],
  localCounter: null,
};

const mapStateToProps = state => ({
  localCounter: state.requestLocalCount.localCounter,
});
export default connect(mapStateToProps)(LocalSpinnerContainer);
