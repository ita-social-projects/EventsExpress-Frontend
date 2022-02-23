import React from "react";
import SliderForEvents from "../landing/SliderForEvents/SliderForEvents";
import EventsListItem from "../landing/EventsListItem/EventsListItem";
import EventMatrix from "../landing/EventMatrix/EventMatrix";

const viewModeSwitcher = (events, viewMode) => {
  switch (viewMode) {
    case "slider":
      return <SliderForEvents events={events} />;
    case "list":
      return <EventsListItem events={events} />;
    default:
      return <EventMatrix events={events} />;
  }
};

export default viewModeSwitcher;
