import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import addEvent from "../../actions/event/eventAddAction";
import Landing from "../../components/Landing/Landing/Landing";

// TODO Refactor class component
class LandingContainer extends Component {
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

LandingContainer.propTypes = {
  addEvent: PropTypes.func,
  user: PropTypes.object,
};

LandingContainer.defaultProps = {
  addEvent: () => {},
  user: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
