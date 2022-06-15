import React, { useState, useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { BiRightArrowAlt } from "react-icons/bi";
import moment from "moment";
import IconsEventCard from "./IconsEventCard/IconsEventCard";
import "./EventCard.scss";
import PhotoService from "../../../services/PhotoService";
import {
  EVENT_DEFAULT_IMAGE,
  FORMATS,
} from "../../../constants/eventConstants";

const EventCard = ({ event }) => {
  const { id, eventId, title, dateFrom } = event;
  const photoService = useMemo(() => new PhotoService(), []);
  const [eventImage, setEventImage] = useState(EVENT_DEFAULT_IMAGE);
  const pathName = useLocation().pathname;
  useEffect(() => {
    // TODO move to service and call from action
    photoService
      .getPreviewEventPhoto(pathName === "/eventSchedules" ? eventId : id)
      .then(eventPreviewImage => {
        if (eventPreviewImage) {
          const image = URL.createObjectURL(eventPreviewImage);
          setEventImage(image);
        }
      });
    return () => {
      URL.revokeObjectURL(eventImage);
    };
    // TODO Disabled this rule in eslint config
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
            {moment(dateFrom).format(FORMATS.DAY_FORMAT)}
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
        {moment(dateFrom).format(FORMATS.MONTH_FORMAT)}
      </span>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.object,
};

EventCard.defaultProps = {
  event: {},
};
export default EventCard;
