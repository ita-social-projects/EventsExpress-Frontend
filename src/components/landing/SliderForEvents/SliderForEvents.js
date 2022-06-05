import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import EventCard from "../EventCard/EventCard";
import settingsForSlider from "./settingsForSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderForEvents.scss";

const SliderForEvents = ({ events }) => {
  return (
    <Slider {...settingsForSlider}>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </Slider>
  );
};

SliderForEvents.defaultProps = {
  events: [],
};

SliderForEvents.propTypes = {
  events: PropTypes.array,
};

export default SliderForEvents;
