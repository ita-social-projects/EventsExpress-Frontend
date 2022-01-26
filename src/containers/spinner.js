import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../components/spinner";

const SpinnerWrapper = ({ counter, showContent, children }) =>
  counter > 0 || !showContent ? <Spinner /> : children;

const mapStateToProps = state => ({
  counter: state.requestCount.counter,
});

SpinnerWrapper.propTypes = {
  counter: PropTypes.number,
  showContent: PropTypes.bool,
  children: PropTypes.array,
};

SpinnerWrapper.defaultProps = {
  counter: null,
  showContent: false,
  children: [],
};

export default connect(mapStateToProps)(SpinnerWrapper);
