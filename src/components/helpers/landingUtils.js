import React from "react";
import SliderForEvents from "../Landing/SliderForEvents/SliderForEvents";
import EventsListItem from "../Landing/EventsListItem/EventsListItem";
import EventMatrix from "../Landing/EventMatrix/EventMatrix";
import {
  VIEW_MODE_TYPES,
  VIEW_MODE_KEY_FOR_LOCAL_STORAGE,
} from "../../constants/eventConstants";

const { SLIDER, LIST, MATRIX } = VIEW_MODE_TYPES;

const viewModeSwitcher = (events, viewModeType, filterTitle) => {
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

export default viewModeSwitcher;
