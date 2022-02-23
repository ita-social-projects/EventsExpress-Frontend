import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import PhotoService from "../../../../services/PhotoService";
import eventDefaultImage from "../../../../constants/eventDefaultImage";
import parseDate from "../../../helpers/parseDate";
import IconsEventCard from "../../EventCard/IconsEventCard/IconsEventCard";
import "./EventListCard.scss";

const photoService = new PhotoService();
const VIEW_DETAIL = "View detail";

const EventListCard = ({ event }) => {
  const { id, data, title, description, location, dateFrom } = event;

  const [eventImage, setEventImage] = useState(eventDefaultImage);

  useEffect(() => {
    photoService.getFullEventPhoto(data?.id).then(eventFullImage => {
      if (eventFullImage !== null) {
        setEventImage(URL.createObjectURL(eventFullImage));
      }
    });

    return () => URL.revokeObjectURL(eventImage);
  }, [data?.id, eventImage]);

  return (
    <div className="card__item">
      <div className="card__item_photo">
        <img src={eventImage} alt="Event_photo" />
      </div>
      <div className="card__item_content">
        <h2 className="card__item_header">{title}</h2>
        <div className="card__item_description">
          {`${description.slice(0, 150)}...`}
        </div>
        <div className="card__item_bottom-row">
          <span className="card__item_footer">{location}</span>
          <span className="card__item_footer">{parseDate(dateFrom)}</span>
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
