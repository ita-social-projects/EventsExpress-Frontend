import React from "react";
import PropTypes from "prop-types";
import EventListCard from "./EventListCard/EventListCard";

const EventsListItem = ({ events }) =>
  // REFACTOR What does it means?? 5
  // eslint-disable-next-line no-magic-numbers
  events.map(event => <EventListCard key={event.id + 5} event={event} />);

EventsListItem.defaultProps = {
  events: [],
};

EventsListItem.propTypes = {
  events: PropTypes.array,
};

export default EventsListItem;
