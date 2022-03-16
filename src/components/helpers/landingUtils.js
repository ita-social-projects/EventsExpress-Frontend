import React from "react";
import SliderForEvents from "../landing/SliderForEvents/SliderForEvents";
import EventsListItem from "../landing/EventsListItem/EventsListItem";
import EventMatrix from "../landing/EventMatrix/EventMatrix";

const viewModeSwitcher = (events, viewModeType) => {
  const viewMode = {
    list: <EventsListItem events={events} />,
    matrix: <EventMatrix events={events} />,
  };

  return viewMode[viewModeType] || <SliderForEvents events={events} />;
};

export default viewModeSwitcher;
