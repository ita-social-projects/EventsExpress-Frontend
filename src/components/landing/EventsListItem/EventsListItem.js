import React from "react";
import PropTypes from "prop-types";
import EventListCard from "./EventListCard/EventListCard";

const EventsListItem = ({ events }) =>
  events.map(event => <EventListCard key={event.id} event={event} />);

EventsListItem.defaultProps = {
  events: [],
};

EventsListItem.propTypes = {
  events: PropTypes.array,
};

export default EventsListItem;
