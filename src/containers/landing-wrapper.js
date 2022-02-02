import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import addEvent from "../actions/event/event-add-action";
import Landing from "../components/landing";

class LandingWrapper extends Component {
  onSubmit = () => {
    return this.props.addEvent();
  };

  render() {
    return <Landing user={this.props.user} onSubmit={this.onSubmit} />;
  }
}

const mapStateToProps = state => ({
  user: state.user,
  hub: state.hubConnections.chatHub,
});

const mapDispatchToProps = dispatch => {
  return {
    add_event: () => dispatch(addEvent()),
  };
};

LandingWrapper.propTypes = {
  addEvent: PropTypes.func,
  user: PropTypes.object,
};

LandingWrapper.defaultProps = {
  addEvent: () => {},
  user: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingWrapper);
