import React from "react";
import PropTypes from "prop-types";
import EventFilterWrapper from "../../../containers/event-filter";
import AdminEventListWrapper from "../../../containers/events-for-admin";

const EventsForAdmin = ({ location }) => {
  return (
    <>
      <EventFilterWrapper />
      <div className="admin-events-container">
        <AdminEventListWrapper params={location.search} />
      </div>
    </>
  );
};

EventsForAdmin.propTypes = {
  location: PropTypes.object,
};

EventsForAdmin.defaultProps = {
  location: {},
};

export default EventsForAdmin;
