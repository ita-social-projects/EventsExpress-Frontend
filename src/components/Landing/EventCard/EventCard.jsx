import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { BiRightArrowAlt } from "react-icons/bi";
import moment from "moment";
import "./EventCard.scss";
import PhotoService from "../../../services/PhotoService";
import {
  EVENT_CARD_TITLE_SLICE,
  EVENT_DEFAULT_IMAGE,
  FORMATS,
} from "../../../constants/eventConstants";

const EventCard = ({ event, additionalButtons, additionalModal }) => {
  const { id, title, dateFrom, nextRun } = event;
  const photoService = new PhotoService();
  const [eventImage, setEventImage] = useState(EVENT_DEFAULT_IMAGE);
  const titleText =
    title === null ? "No title" : title.slice(0, EVENT_CARD_TITLE_SLICE);
  const day =
    dateFrom === undefined
      ? moment(nextRun).format(FORMATS.DAY_FORMAT)
      : moment(dateFrom).format(FORMATS.DAY_FORMAT);
  const month =
    dateFrom === undefined
      ? moment(nextRun).format(FORMATS.MONTH_FORMAT)
      : moment(dateFrom).format(FORMATS.MONTH_FORMAT);

  useEffect(() => {
    photoService.getPreviewEventPhoto(id).then(eventPreviewImage => {
      if (eventPreviewImage !== null) {
        setEventImage(URL.createObjectURL(eventPreviewImage));
      }
    });
    return () => {
      URL.revokeObjectURL(eventImage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="event-card">
        <img
          className="card-image-container card-image"
          src={eventImage}
          alt=""
        />
        <div className="card-content">
          <div className="card-date date-container">
            <span className="day">{day}</span>
          </div>
          <div className="card-info">
            <span className="card-info-header">{titleText}</span>
            <div className="card-buttons">
              {additionalButtons}
              <NavLink to={`/home/events/${id}`} className="more bttn">
                <BiRightArrowAlt size={30} />
              </NavLink>
            </div>
          </div>
        </div>
        <span className="month">{month}</span>
      </div>
      {additionalModal}
    </>
  );
};

EventCard.propTypes = {
  event: PropTypes.object,
  additionalButtons: PropTypes.object,
  additionalModal: PropTypes.object,
};

EventCard.defaultProps = {
  event: {},
  additionalButtons: {},
  additionalModal: null,
};
export default EventCard;
