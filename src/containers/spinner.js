import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../components/spinner";

const SpinnerWrapper = ({ counter, showContent, children }) =>
  counter > 0 || !showContent ? <Spinner /> : children;

const mapStateToProps = state => ({
  counter: state.requestCount.counter,
});

SpinnerWrapper.defaultProps = {
  counter: null,
  children: {},
  showContent: false,
};

SpinnerWrapper.propTypes = {
  counter: PropTypes.number,
  children: PropTypes.object,
  showContent: PropTypes.bool,
};
export default connect(mapStateToProps)(SpinnerWrapper);
