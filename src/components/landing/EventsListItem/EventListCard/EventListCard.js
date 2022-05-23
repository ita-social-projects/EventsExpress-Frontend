import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { BiRightArrowAlt } from "react-icons/bi";
import PhotoService from "../../../../services/PhotoService";
import eventDefaultImage from "../../../../constants/eventDefaultImage";
import IconsEventCard from "../../EventCard/IconsEventCard/IconsEventCard";
import "./EventListCard.scss";

const photoService = new PhotoService();

const EventListCard = ({ event }) => {
  const { id, photo, title, description, location } = event;
  const ovner = event.organizers[0].username;

  const [eventImage, setEventImage] = useState(eventDefaultImage);

  useEffect(() => {
    photoService.getFullEventPhoto(photo?.id).then(eventFullImage => {
      if (eventFullImage !== null && eventFullImage !== undefined) {
        setEventImage(URL.createObjectURL(eventFullImage));
      }
    });

    return () => URL.revokeObjectURL(eventImage);
  }, [photo?.id, eventImage]);

  return (
    <div className="card__item_container">
      <div className="card__item">
        <div className="content">
          <div className="image-container">
            <img className="card-image" src={photo} alt="Event_photo" />
          </div>
          <div className="card__item_content">
            <h2 className="card__item_header">
              {title.length > 35 ? `${title.slice(0, 35)}...` : title}
            </h2>
            <p className="card__item-ovner">{`By ${ovner}`}</p>
            <p className="card__item_description">
              {`${description.slice(0, 100)}...`}
            </p>
          </div>
        </div>
        <div className="card__item_bottom-row">
          <div className="event-date">
            <span className="day">01</span>
            <span className="month">March</span>
          </div>
          <span className="card__item_footer event-location">{location}</span>
          <IconsEventCard className="card__item_footer" styleForIcon="list" />
          <NavLink
            to={`/home/events/${id}`}
            className="card__item_footer event-details-btn bttn"
          >
            <BiRightArrowAlt size={30} />
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
