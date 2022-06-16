import React from "react";
import PropTypes from "prop-types";
import EventCard from "../EventCard/EventCard";
import "./EventMatrix.scss";
import { CARD_TYPE } from "../../../constants/eventConstants";

export default function EventMatrix({ events }) {
  return (
    <div className="event-matrix">
      {events.map(event => (
        <EventCard
          key={event.id}
          event={event}
          handleClick={() => {}}
          cardType={CARD_TYPE.LANDING}
        />
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
