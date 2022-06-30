import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import settingsForSlider from "./settingsForSlider";
import DraftEventCard from "../../Draft/DraftEventCard";
import { CARD_TYPE } from "../../../constants/eventConstants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderForEvents.scss";

const SliderForEvents = ({ events }) => {
  return (
    <Slider {...settingsForSlider}>
      {events.map(event => (
        <DraftEventCard
          key={event.id}
          event={event}
          cardType={CARD_TYPE.LANDING}
        />
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
