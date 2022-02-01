import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LeftSidebar from "../components/left-sidebar";

class LeftSidebarWrapper extends Component {
  searchUnreadMsg = () => {
    return this.props.notification.messages.filter(
      x => x.senderId !== this.props.user.id,
    );
  };

  render() {
    return (
      <LeftSidebar
        user={this.props.user}
        msg_for_read={this.searchUnreadMsg}
        filter={this.props.filter}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  notification: state.notification,
  filter: state.events.filter,
});

LeftSidebarWrapper.propTypes = {
  notification: PropTypes.object,
  user: PropTypes.object,
  filter: PropTypes.func,
};

LeftSidebarWrapper.defaultProps = {
  notification: {},
  user: {},
  filter: () => {},
};

export default connect(mapStateToProps)(LeftSidebarWrapper);
