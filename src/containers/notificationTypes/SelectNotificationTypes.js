import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import setUserNotificationTypes from "../../actions/redactProfile/userNotificationType-add-action";
import getNotificationTypes from "../../actions/notificationType/notificationType-list-action";
import SelectNotificationType from "../../components/SelectNotificationTypes/SelectNotificationType";
import getUserNotificationTypes from "../../actions/notificationType/userNotificationType-action";

class SelectNotificationTypesWrapper extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount = () => {
    this.props.getNotificationTypes();
    this.props.getUserNotificationTypes();
  };

  handleSubmit(event) {
    this.props.setUserNotificationTypes({
      notificationTypes: event.notificationTypes,
    });
    const item = event;
    item.notificationTypes = [];
  }

  render() {
    return (
      <SelectNotificationType
        items={this.props.allNotificationTypes.data}
        initialValues={{ notificationTypes: this.props.user.notificationTypes }}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    allNotificationTypes: state.notificationType,
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserNotificationTypes: data => dispatch(setUserNotificationTypes(data)),
    getNotificationTypes: () => dispatch(getNotificationTypes()),
    getuserNotificationTypes: () => dispatch(getUserNotificationTypes()),
  };
};
SelectNotificationTypesWrapper.propTypes = {
  getNotificationTypes: PropTypes.func,
  getUserNotificationTypes: PropTypes.func,
  allNotificationTypes: PropTypes.object,
  user: PropTypes.object,
  setUserNotificationTypes: PropTypes.func,
};
SelectNotificationTypesWrapper.defaultProps = {
  getNotificationTypes: () => {},
  getUserNotificationTypes: () => {},
  allNotificationTypes: {},
  user: {},
  setUserNotificationTypes: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectNotificationTypesWrapper);
