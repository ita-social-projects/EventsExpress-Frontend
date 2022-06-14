import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { BiRightArrowAlt } from "react-icons/bi";
import moment from "moment";
import IconsEventCard from "./IconsEventCard/IconsEventCard";
import "./EventCard.scss";
import PhotoService from "../../../services/PhotoService";
import eventDefaultImage from "../../../constants/eventDefaultImage";
import FORMATS from "../../../constants/EventCardConstants";

const EventCard = ({ event }) => {
  const { id, title, dateFrom, eventId } = event;
  const photoService = new PhotoService();
  const [eventImage, setEventImage] = useState(eventDefaultImage);

  useEffect(() => {
    photoService.getPreviewEventPhoto(eventId).then(eventPreviewImage => {
      if (eventPreviewImage != null) {
        setEventImage(URL.createObjectURL(eventPreviewImage));
      }
    });
    return () => {
      URL.revokeObjectURL(eventImage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="event-card">
      <img
        className="card-image-container card-image"
        src={eventImage}
        alt=""
      />
      <div className="card-content">
        <div className="card-date date-container">
          <span className="day">
            {moment(dateFrom).format(FORMATS.dayFormat)}
          </span>
        </div>
        <div className="card-info">
          <span className="card-info-header">
            {title.length > 35 ? `${title.slice(0, 35)}...` : title}
          </span>
          <div className="card-buttons">
            <IconsEventCard className="like" styleForIcon="list" />
            <NavLink to={`/home/events/${id}`} className="more bttn">
              <BiRightArrowAlt size={30} />
            </NavLink>
          </div>
        </div>
      </div>
      <span className="month">
        {moment(dateFrom).format(FORMATS.monthFormat)}
      </span>
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
