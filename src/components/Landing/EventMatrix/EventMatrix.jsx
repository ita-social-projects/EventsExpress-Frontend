import React from "react";
import PropTypes from "prop-types";
import "./EventMatrix.scss";
import { CARD_TYPE } from "../../../constants/eventConstants";
import DraftEventCard from "../../Draft/DraftEventCard";

export default function EventMatrix({ events }) {
  return (
    <div className="event-matrix">
      {events.map(event => (
        <DraftEventCard
          key={event.id}
          event={event}
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
