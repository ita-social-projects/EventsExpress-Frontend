import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { BiRightArrowAlt } from "react-icons/bi";
import IconsEventCard from "./IconsEventCard/IconsEventCard";

import "./EventCard.scss";

const EventCard = ({ event }) => {
  const { id, title, photo } = event;

  return (
    <div className="event-card">
      <div className="card-image-container">
        <img className="card-image" src={photo} alt="" />
      </div>
      <div className="card-content">
        <div className="card-date">
          <div className="date-container">
            <span className="day">12</span>
          </div>
        </div>
        <div className="card-info">
          <span className="card-info-header">
            {title.length > 55 ? `${title.slice(0, 55)}...` : title}
          </span>
          <div className="card-buttons">
            <IconsEventCard className="like" styleForIcon="list" />
            <NavLink to={`/home/events/${id}`} className="more bttn">
              <BiRightArrowAlt size={30} />
            </NavLink>
          </div>
        </div>
      </div>
      <span className="month">september</span>
    </div>
  );
};

EventCard.propTypes = {
  event: {},
};

EventCard.defaultProps = {
  event: PropTypes.object,
};
export default EventCard;
