import React from "react";
import SliderForEvents from "../landing/SliderForEvents/SliderForEvents";
import EventsListItem from "../landing/EventsListItem/EventsListItem";
import EventMatrix from "../landing/EventMatrix/EventMatrix";
import {
  viewModeTypes,
  VIEW_MODE_KEY_FOR_LOCAL_STORAGE,
} from "../../constants/EventsViewModeConstants";

const { SLIDER, LIST, MATRIX } = viewModeTypes;

const viewModeSwitcher = (events, viewModeType) => {
  localStorage.setItem(VIEW_MODE_KEY_FOR_LOCAL_STORAGE, viewModeType);
  switch (viewModeType) {
    case SLIDER:
      return <SliderForEvents events={events} />;
    case LIST:
      return <EventsListItem events={events} />;
    case MATRIX:
      return <EventMatrix events={events} />;
    default:
      return <></>;
  }
};

export default viewModeSwitcher;
