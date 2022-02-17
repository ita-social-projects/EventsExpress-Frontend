import React from "react";
import PropTypes from "prop-types";
import "./EventCardV2.scss";

const EventCard = ({ title, photo }) => {
  return (
    <div className="event-card">
      <div className="event-card__body">
        <img className="event-card__poster" src={photo} alt="Poster"></img>
        <div className="event-card__inner-container">
          <div className="event-card__text-container">
            <p className="event-card__inner-text">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  title: PropTypes.string,
  photo: PropTypes.string,
};

EventCard.defaultProps = {
  title: "",
  photo: "",
};
export default EventCard;
