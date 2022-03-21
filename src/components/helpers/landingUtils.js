import React from "react";
import SliderForEvents from "../landing/SliderForEvents/SliderForEvents";
import EventsListItem from "../landing/EventsListItem/EventsListItem";
import EventMatrix from "../landing/EventMatrix/EventMatrix";

const viewModeSwitcher = (events, viewModeType) => {
  localStorage.setItem("viewModeEvents", viewModeType);
  return {
    list: <EventsListItem events={events} />,
    matrix: <EventMatrix events={events} />,
    slider: <SliderForEvents events={events} />,
  }[viewModeType];
};

export default viewModeSwitcher;
