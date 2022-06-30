import React, { useState, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { BiRightArrowAlt } from "react-icons/bi";
import moment from "moment";
import IconsEventCard from "../../EventCard/IconsEventCard/IconsEventCard";
import "./EventListCard.scss";
import PhotoService from "../../../../services/PhotoService";
import {
  EVENT_DEFAULT_IMAGE,
  EVENT_LIST_DESC_SLICE,
  EVENT_LIST_TITLE_SLICE,
} from "../../../../constants/eventConstants";

const EventListCard = ({ event }) => {
  const { id, title, description, location, dateFrom } = event;
  const ovner = event.organizers[0].username;

  const photoService = useMemo(() => new PhotoService(), []);
  const [eventImage, setEventImage] = useState(EVENT_DEFAULT_IMAGE);

  useEffect(() => {
    // TODO move to service and call from action
    photoService.getPreviewEventPhoto(id).then(eventPreviewImage => {
      if (eventPreviewImage) {
        const image = URL.createObjectURL(eventPreviewImage);
        setEventImage(image);
      }
    });
    return () => {
      URL.revokeObjectURL(eventImage);
    };
    // TODO Disabled this rule in eslint config
  }, []);

  return (
    <div className="card-item-container">
      <div className="card-item">
        <div className="content">
          <div className="image-container">
            <img className="card-image" src={eventImage} alt="" />
          </div>
          <div className="card-item-content">
            <h2 className="card-item-header">
              {title.length > EVENT_LIST_TITLE_SLICE
                ? `${title.slice(0, EVENT_LIST_TITLE_SLICE)}...`
                : title}
            </h2>
            <p className="card-item-ovner">{`By ${ovner}`}</p>
            <p className="card-item-description">
              {`${description.slice(0, EVENT_LIST_DESC_SLICE)}...`}
            </p>
          </div>
        </div>
        <div className="card-item-bottom-row">
          <div className="event-date">
            <span className="day">{moment(dateFrom).format("DD")}</span>
            <span className="month">{moment(dateFrom).format("MMMM")}</span>
          </div>
          <span className="card-item-footer event-location">
            {location.latitude ? "Map" : "Online"}
          </span>
          <IconsEventCard className="card-item-footer" styleForIcon="list" />
          <NavLink
            to={`/home/events/${id}`}
            className="card-item-footer event-details-btn bttn"
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
