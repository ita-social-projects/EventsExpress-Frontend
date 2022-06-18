import React from "react";
import SliderForEvents from "../SliderForEvents/SliderForEvents";
import EventsListItem from "../EventsListItem/EventsListItem";
import EventMatrix from "../EventMatrix/EventMatrix";
import {
  VIEW_MODE_TYPES,
  VIEW_MODE_KEY_FOR_LOCAL_STORAGE,
} from "../../../constants/eventConstants";

const { SLIDER, LIST, MATRIX } = VIEW_MODE_TYPES;

const LandingContent = (events, viewModeType, filterTitle) => {
  const eventsFiltered = events.filter(event =>
    event.title.toLowerCase().includes(filterTitle.toLowerCase()),
  );
  localStorage.setItem(VIEW_MODE_KEY_FOR_LOCAL_STORAGE, viewModeType);
  switch (viewModeType) {
    case SLIDER:
      return <SliderForEvents events={eventsFiltered} />;
    case LIST:
      return <EventsListItem events={eventsFiltered} />;
    case MATRIX:
      return <EventMatrix events={eventsFiltered} />;
    default:
      return <></>;
  }
};

export default LandingContent;
