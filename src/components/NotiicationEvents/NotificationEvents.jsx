import React, { Component } from "react";
import PropTypes from "prop-types";
import EventList from "../Event/EventsForProfile/EventsForProfile";
import SpinnerWrapper from "../../containers/spinner";

// TODO :to functional component
class NotificationEvents extends Component {
  componentWillMount = () => {
    this.props.getEvents(this.props.notification.events);
  };

  render() {
    const { currentUser } = this.props;
    const { data } = this.props.events;
    const { items } = this.props.events.data;

    return (
      <SpinnerWrapper showContent={data !== undefined}>
        {items.length === 0 && (
          <p className="text-center h3">You don&#39;t have notifications</p>
        )}
        <EventList
          current_user={currentUser}
          notification_events={this.props.notification.events}
          data_list={items}
          page={data.pageViewModel.pageNumber}
          totalPages={data.pageViewModel.totalPages}
          callback={this.props.getEvents}
        />
      </SpinnerWrapper>
    );
  }
}

NotificationEvents.defaultProps = {
  getEvents: () => {},
  notification: () => {},
  events: {},
  currentUser: {},
};

NotificationEvents.propTypes = {
  getEvents: PropTypes.func,
  notification: PropTypes.func,
  events: PropTypes.object,
  currentUser: PropTypes.object,
};

export default NotificationEvents;
