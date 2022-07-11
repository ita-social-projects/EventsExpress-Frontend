import React, { useEffect } from "react";
import PropTypes from "prop-types";
import EventList from "../Event/EventsForProfile/EventsForProfile";
import SpinnerContainer from "../../containers/SpinnerContainer/SpinnerContainer";
import { EMPTY_NOTIFICATIONS_ARRAY } from "../../constants/notificationConstants";

const NotificationEvents = ({
  getEvents,
  notification,
  events,
  currentUser,
}) => {
  useEffect(() => {
    getEvents(notification.events);
  }, []);

  const { data } = events;
  const { items } = events.data;

  return (
    <SpinnerContainer showContent={data !== undefined}>
      {items.length === EMPTY_NOTIFICATIONS_ARRAY && (
        <p className="text-center h3">{"You don&#39;t have notifications"}</p>
      )}
      <EventList
        current_user={currentUser}
        notification_events={notification.events}
        data_list={items}
        page={data.pageViewModel.pageNumber}
        totalPages={data.pageViewModel.totalPages}
        callback={getEvents}
      />
    </SpinnerContainer>
  );
};

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
