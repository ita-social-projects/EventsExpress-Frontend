import React from "react";
import PropTypes from "prop-types";
import IconsEventCard from "./IconsEventCard/IconsEventCard";
import "./EventCard.scss";

const EventCard = ({ title, photo, isSlider }) => {
  const sliderOrMatrix = isSlider ? "slider" : "matrix";

  return (
    <div className="event-card">
      <img className="event-card__poster" src={photo} alt="Poster" />
      <div className="event-card__inner-container">
        <p className="event-card__inner-text">{title}</p>
      </div>
      <IconsEventCard styleForIcon={sliderOrMatrix} />
    </div>
  );
};

EventCard.propTypes = {
  isSlider: PropTypes.bool,
  title: PropTypes.string,
  photo: PropTypes.string,
};

EventCard.defaultProps = {
  isSlider: false,
  title: "",
  photo: "",
};
export default EventCard;
