import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { BiRightArrowAlt } from "react-icons/bi";
import moment from "moment";
import "./EventCard.scss";
import PhotoService from "../../../services/PhotoService";
import {
  EVENT_DEFAULT_IMAGE,
  FORMATS,
} from "../../../constants/eventConstants";

const EventCard = ({ event, additionalButtons, additionalModal }) => {
  const { id, title, dateFrom } = event;
  const photoService = new PhotoService();
  const [eventImage, setEventImage] = useState(EVENT_DEFAULT_IMAGE);
  const sliceLength = title.length > 35 ? `${title.slice(0, 35)}...` : title;
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
  // const cardTypeService = () => {
  //   if (cardType === CARD_TYPE.DRAFT) {
  //     return <BsTrash cursor="pointer" size={30} />;
  //   }
  //   if (cardType === CARD_TYPE.LANDING) {
  //     return <AiOutlineHeart cursor="pointer" size={30} />;
  //   }
  //   return <></>;
  // };
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
            <span className="day">
              {moment(dateFrom).format(FORMATS.DAY_FORMAT)}
            </span>
          </div>
          <div className="card-info">
            <span className="card-info-header">
              {title !== null ? sliceLength : "No title"}
            </span>
            <div className="card-buttons">
              {additionalButtons.map(button => button)}
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
      {additionalModal}
    </>
  );
};

EventCard.propTypes = {
  event: PropTypes.object,
  additionalButtons: PropTypes.array,
  additionalModal: PropTypes.object,
};

EventCard.defaultProps = {
  event: {},
  additionalButtons: [],
  additionalModal: null,
};
export default EventCard;
