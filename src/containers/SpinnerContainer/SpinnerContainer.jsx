import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../components/Spinner/Spinner";
import { ZERO_AMOUNT } from "../../constants/numberConstants";

const SpinnerContainer = ({ counter, showContent, children }) =>
  counter > ZERO_AMOUNT || !showContent ? <Spinner /> : children;

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
