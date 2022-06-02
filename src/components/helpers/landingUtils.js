import React from "react";
import SliderForEvents from "../landing/SliderForEvents/SliderForEvents";
import EventsListItem from "../landing/EventsListItem/EventsListItem";
import EventMatrix from "../landing/EventMatrix/EventMatrix";
import {
  viewModeTypes,
  VIEW_MODE_KEY_FOR_LOCAL_STORAGE,
} from "../../constants/EventsViewModeConstants";

const { SLIDER, LIST } = viewModeTypes;

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
    default:
      return <EventMatrix events={eventsFiltered} />;
  }
};

export default viewModeSwitcher;
