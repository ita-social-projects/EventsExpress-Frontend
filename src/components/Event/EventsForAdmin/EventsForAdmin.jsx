import React from "react";
import PropTypes from "prop-types";
import EventFilterContainer from "../../../containers/EventFilterContainer/EventFilterContainer";
import EventsForAdminContainer from "../../../containers/EventsForAdminContainer/EventsForAdminContainer";

const EventsForAdmin = ({ location }) => {
  return (
    <>
      <EventFilterContainer />
      <div className="admin-events-container">
        <EventsForAdminContainer params={location.search} />
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
