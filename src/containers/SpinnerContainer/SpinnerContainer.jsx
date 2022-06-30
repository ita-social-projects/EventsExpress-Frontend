import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../components/Spinner/Spinner";
import { DEFAULT_COUNT_VALUE } from "../../constants/constants";

const SpinnerContainer = ({ counter, showContent, children }) =>
  counter > DEFAULT_COUNT_VALUE || !showContent ? <Spinner /> : children;

const mapStateToProps = state => ({
  counter: state.requestCount.counter,
});

SpinnerContainer.propTypes = {
  counter: PropTypes.number,
  showContent: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  children: PropTypes.object,
};

SpinnerContainer.defaultProps = {
  counter: null,
  showContent: false,
  children: {},
};

export default connect(mapStateToProps)(SpinnerContainer);
