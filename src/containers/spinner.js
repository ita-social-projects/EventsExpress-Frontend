import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../components/spinner";

const SpinnerWrapper = ({ counter, showContent, children }) =>
  counter > 0 || !showContent ? <Spinner /> : children;

const mapStateToProps = state => ({
  counter: state.requestCount.counter,
});

SpinnerWrapper.propTypes = {
  counter: PropTypes.number,
  showContent: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  children: PropTypes.object,
};

SpinnerWrapper.defaultProps = {
  counter: null,
  showContent: false,
  children: {},
};

export default connect(mapStateToProps)(SpinnerWrapper);
