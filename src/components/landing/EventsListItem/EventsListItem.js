/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import PhotoService from "../../../services/PhotoService";
import eventDefaultImage from "../../../constants/eventDefaultImage";
import parseDate from "../../helpers/parseDate";
import "./EventsListItem.scss";
import IconsEventCard from "../EventCard/IconsEventCard/IconsEventCard";

const photoService = new PhotoService();
const VIEW_DETAIL = "View detail";
const EventsListItem = ({ event }) => {
  const [eventImage, setEventImage] = useState(eventDefaultImage);

  useEffect(() => {
    photoService.getFullEventPhoto(event?.data?.id).then(eventFullImage => {
      if (eventFullImage != null) {
        setEventImage(URL.createObjectURL(eventFullImage));
      }
    });

    return () => URL.revokeObjectURL(eventImage);
  }, [event?.data?.id, eventImage]);

  return (
    <div className="card__item">
      <div className="card__item_photo">
        <img src={eventImage} alt="Event_photo" />
      </div>
      <div className="card__item_content">
        <h2 className="card__item_header">{event.title}</h2>
        <div className="card__item_description">
          {`${event.description.slice(0, 150)}...`}
        </div>
        <div className="card__item_bottom-row">
          <span className="card__item_footer">{event.location}</span>
          <span className="card__item_footer">{parseDate(event.dateFrom)}</span>
          <IconsEventCard styleForIcon="list" />
          <NavLink to={`/home/events/${event.id}`} className="bttn">
            {VIEW_DETAIL}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

EventsListItem.defaultProps = {
  event: {},
};

EventsListItem.propTypes = {
  event: PropTypes.object,
};

export default EventsListItem;
