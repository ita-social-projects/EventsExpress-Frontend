import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import PhotoService from "../../../../services/PhotoService";
import eventDefaultImage from "../../../../constants/eventDefaultImage";
import IconsEventCard from "../../EventCard/IconsEventCard/IconsEventCard";
import dateParser from "../../../helpers/form-helpers/dateParser";
import "./EventListCard.scss";

const photoService = new PhotoService();
const VIEW_DETAIL = "View detail";

const EventListCard = ({ event }) => {
  const { id, data, title, description, location, dateFrom } = event;

  const [eventImage, setEventImage] = useState(eventDefaultImage);

  useEffect(() => {
    photoService.getFullEventPhoto(data?.id).then(eventFullImage => {
      if (eventFullImage !== null && eventFullImage !== undefined) {
        setEventImage(URL.createObjectURL(eventFullImage));
      }
    });

    return () => URL.revokeObjectURL(eventImage);
  }, [data?.id, eventImage]);

  return (
    <div className="card__item">
      <img src={eventImage} alt="Event_photo" />
      <div className="card__item_content">
        <h2 className="card__item_header">{title}</h2>
        <p className="card__item_description">
          {`${description.slice(0, 150)}...`}
        </p>
        <div className="card__item_bottom-row">
          <span className="card__item_footer">{location}</span>
          <span className="card__item_footer">{dateParser(dateFrom)}</span>
          <IconsEventCard styleForIcon="list" />
          <NavLink to={`/home/events/${id}`} className="bttn">
            {VIEW_DETAIL}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

EventListCard.defaultProps = {
  event: {},
};

EventListCard.propTypes = {
  event: PropTypes.object,
};

export default EventListCard;
