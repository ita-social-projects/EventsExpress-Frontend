import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import Image from "../../../mockup-images/football-g10e9bda93_1920.jpg";
import EventCard from "../EventCard/EventCard";
import "./SliderForEvents.scss";

const SliderForEvents = ({ events }) => {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    centerPadding: "0px",
    dots: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {events.map(event => (
          <EventCard
            key={event.id}
            title={event.title}
            photo={Image}
            isSlider
          />
        ))}
      </Slider>
    </div>
  );
};

SliderForEvents.defaultProps = {
  events: [],
};

SliderForEvents.propTypes = {
  events: PropTypes.array,
};

export default SliderForEvents;
