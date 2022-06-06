import React from "react";
import PropTypes from "prop-types";
import EventCard from "../EventCard/EventCard";
import "./EventMatrix.scss";

export default function EventMatrix({ events }) {
  return (
    <div className="event-matrix">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

EventMatrix.defaultProps = {
  events: [],
};

EventMatrix.propTypes = {
  events: PropTypes.array,
};
