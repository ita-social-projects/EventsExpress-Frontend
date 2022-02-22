import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import Image from "../../../mockup-images/football-g10e9bda93_1920.jpg";
import EventCard from "../EventCard/EventCard";
import settingsForSlider from "./settingsForSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderForEvents.scss";

const SliderForEvents = ({ events }) => {
  return (
    <Slider {...settingsForSlider}>
      {events.map(event => (
        <EventCard key={event.id} title={event.title} photo={Image} isSlider />
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
