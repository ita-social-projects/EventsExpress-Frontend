// TODO!: split this file
/* eslint-disable no-const-assign */
/* eslint-disable complexity */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import PropTypes from "prop-types";
import RatingContainer from "../../../containers/RatingContainer/RatingContainer";
import Comment from "../../Comment/Comment";
import "moment-timezone";
import "../../Layout/Colorlib.scss";
import "./EventItemView.scss";
import EventVisitors from "../EventVisitors/EventVisitors";
import EventLeaveModal from "../EventLeaveModal/EventLeaveModal";
import DisplayLocation from "../Map/DisplayLocation";
import SpinnerContainer from "../../../containers/SpinnerContainer/SpinnerContainer";
import InventoryListContainer from "../../../containers/InventoryContainer/InvetoryListContainer";
import { ADULT_AGE } from "../../../constants/userConstants";
import {
  EVENT_DEFAULT_IMAGE,
  EVENT_ITEM_VIEW_CONSTS,
  EVENT_STATUS_ENUM,
  VISITORS_STATUS,
  ZERO_TIMING,
} from "../../../constants/eventConstants";
import SimpleModalWithDetails from "../../helpers/simple-modal-with-details";
import PhotoService from "../../../services/PhotoService";
import { BUTTON_NAMES } from "../../../constants/buttonConsts";
import {
  canEdit,
  canJoin,
  canLeave,
  canDeleted,
  canUncancel,
  isMyPrivateEvent,
  canCancel,
} from "../../../services/EventItemViewService";
import {
  maxParticipantsBlock,
  isAppropriateAgeBlock,
  dateBlock,
} from "./EventItemsViewBlocks";

const photoService = new PhotoService();

const EventItemView = ({
  currentUser,
  event,
  match,
  joinEvent,
  leaveEvent,
  unCancel,
  deleteEvent,
  getEventProp,
  reset,
  getUnitsOfMeasuringProp,
  getInventoriesByEventIdProp,
  getUsersInventoriesByEventIdProp,
}) => {
  const [eventImage, setEventImage] = useState(EVENT_DEFAULT_IMAGE);
  const {
    id,
    categories,
    dateFrom,
    dateTo,
    description,
    isPublic,
    isOnlyForAdults,
    eventStatus,
    maxParticipants,
    visitors,
    organizers,
  } = event.data;

  const today = moment().startOf("day");
  const visitorsEnum = {
    approvedUsers: visitors
      ? visitors.filter(x => x.userStatusEvent === VISITORS_STATUS.APPROVED)
      : [],
  };

  const iWillVisitIt = visitors && visitors.find(x => x.id === currentUser.id);
  const isFutureEvent =
    new Date(dateFrom) >=
    new Date().setHours(ZERO_TIMING, ZERO_TIMING, ZERO_TIMING, ZERO_TIMING);
  const isMyEvent =
    organizers && organizers.find(x => x.id === currentUser.id) !== undefined;
  const isFreePlace = visitorsEnum.approvedUsers.length < maxParticipants;
  const isAdult =
    moment.duration(today.diff(moment(currentUser.birthday))).asYears() >=
    ADULT_AGE;

  const onJoin = () => {
    joinEvent(currentUser.id, event.data.id);
  };

  const onLeave = () => {
    leaveEvent(currentUser.id, event.data.id);
  };

  const onCancel = (reason, status) => {
    unCancel(event.data.id, reason, status);
  };

  const onUnCancel = (reason, status) => {
    unCancel(event.data.id, reason, status);
  };

  const onDelete = (reason, status) => {
    deleteEvent(event.data.id, reason, status);
  };

  useEffect(() => {
    photoService.getPreviewEventPhoto(id).then(eventPreviewImage => {
      if (eventPreviewImage !== null) {
        setEventImage(URL.createObjectURL(eventPreviewImage));
      }
    });
    return () => {
      URL.revokeObjectURL(eventImage);
    };
  }, []);

  useEffect(() => {
    const { id: matchId } = match.params;
    getEventProp(matchId);
    getUnitsOfMeasuringProp();
    getInventoriesByEventIdProp(matchId);
    getUsersInventoriesByEventIdProp(matchId);
    reset();
  }, []);

  const renderCategories = arr => {
    if (!arr) return null;
    return arr.map(x => (
      <span key={x.id}>
        {"#"}
        {x.name}
      </span>
    ));
  };

  return (
    <SpinnerContainer showContent={event.data !== undefined}>
      <div className="container-fluid mt-1">
        <div className="row">
          <div className="col-9">
            <div className="col-12">
              <img
                src={eventImage}
                id={`eventFullPhotoImg${id}`}
                alt="Event"
                className="w-100r"
              />
              {maxParticipantsBlock(maxParticipants, visitors)}
              <br />
              {dateBlock(dateTo, dateFrom)}
              <br />
              {event.data.location && (
                <DisplayLocation location={event.data.location} />
              )}
              {renderCategories(categories)}
            </div>
            <div className="btn-group dropup change-event">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle btn-lg"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {BUTTON_NAMES.CHANGE_EVENT_STATUS}
              </button>
              <div className="dropdown-menu">
                {canEdit(isFutureEvent, isMyEvent) && (
                  <Link to={`/editEvent/${id}`}>
                    <button type="button" className="btn btn-danger mb-1">
                      {BUTTON_NAMES.EDIT}
                    </button>
                  </Link>
                )}
                {canCancel(
                  isFutureEvent,
                  currentUser,
                  isMyEvent,
                  eventStatus,
                ) && (
                  <SimpleModalWithDetails
                    button={
                      <button type="button" className="btn btn-danger ">
                        {BUTTON_NAMES.CANCEL}
                      </button>
                    }
                    submitCallback={onCancel}
                    data="Are you sure?"
                  />
                )}
                {canDeleted(isMyEvent, eventStatus) && (
                  <SimpleModalWithDetails
                    button={
                      <button type="button" className="btn btn-danger ">
                        {BUTTON_NAMES.DELETE}
                      </button>
                    }
                    submitCallback={onDelete}
                    data="Are you sure?"
                  />
                )}
                {canUncancel(isFutureEvent) && (
                  <SimpleModalWithDetails
                    button={
                      <button type="button" className="btn btn-danger ">
                        {BUTTON_NAMES.UNDO_CANCEL}
                      </button>
                    }
                    submitCallback={onUnCancel}
                    data="Are you sure?"
                  />
                )}
              </div>
            </div>
          </div>

          {!isFutureEvent && (
            <div className="text-box overflow-auto shadow p-3 mx-3 mb-5 mt-2 bg-white rounded">
              <RatingContainer
                iWillVisitIt={iWillVisitIt}
                eventId={id}
                userId={currentUser.id}
              />
            </div>
          )}
          {isOnlyForAdults && (
            <div className="text-box-big overflow-auto shadow p-3 mx-3 mb-5 mt-2 bg-white rounded">
              <span className="font-weight-bold font">
                {EVENT_ITEM_VIEW_CONSTS.ADULT_LABEL}
              </span>
              <br />
              {EVENT_ITEM_VIEW_CONSTS.EVENTS_FOR_ADULTS}
            </div>
          )}
          <div className="text-box-big overflow-auto shadow p-3 mx-3 mb-5 mt-2 bg-white rounded">
            {eventStatus === EVENT_STATUS_ENUM.CANCELED && (
              <div className="text-center text-uppercase cancel-text">
                <i className="fas fa-exclamation-triangle text-warning" />
                <span>{" This event is canceled "}</span>
                <i className="fas fa-exclamation-triangle text-warning" />
                <br />
              </div>
            )}
            {description}
          </div>
          <div className="shadow p-3 mx-3 mb-5 mt-2 bg-white rounded">
            <InventoryListContainer eventId={id} />
          </div>

          <div className="overflow-auto shadow p-3 mx-3 mb-5 mt-2 bg-white rounded">
            <Comment match={match} />
          </div>
        </div>

        <div className="col-3 overflow-auto shadow p-3 mb-5 bg-white rounded">
          {!isMyEvent && (
            <div className="text-box overflow-auto shadow p-3 mb-5 mt-2 bg-white rounded">
              {isAppropriateAgeBlock(
                isOnlyForAdults,
                isAdult,
                visitors,
                currentUser,
              )}
              {canJoin(
                isFutureEvent,
                isFreePlace,
                iWillVisitIt,
                isMyEvent,
                eventStatus,
                isOnlyForAdults,
                isAdult,
              ) && (
                <div>
                  <br />
                  <button
                    onClick={onJoin}
                    type="button"
                    className="btn btn-success join-leave"
                    variant="contained"
                  >
                    {BUTTON_NAMES.JOIN}
                  </button>
                </div>
              )}
              {canLeave(
                isFutureEvent,
                isMyEvent,
                iWillVisitIt,
                currentUser,
                visitors,
                eventStatus,
              ) && (
                <EventLeaveModal
                  data={{}}
                  submitLeave={onLeave}
                  status={false}
                />
              )}
            </div>
          )}
          <EventVisitors
            data={{}}
            admins={organizers}
            visitors={visitorsEnum}
            isMyPrivateEvent={isMyPrivateEvent(isMyEvent, isPublic)}
            isMyEvent={isMyEvent}
            current_user_id={currentUser.id}
          />
        </div>
      </div>
    </SpinnerContainer>
  );
};

EventItemView.propTypes = {
  currentUser: PropTypes.object,
  event: PropTypes.object,
  match: PropTypes.object,
  joinEvent: PropTypes.func,
  leaveEvent: PropTypes.func,
  unCancel: PropTypes.func,
  deleteEvent: PropTypes.func,
  reset: PropTypes.func,
  getEventProp: PropTypes.func,
  getUnitsOfMeasuringProp: PropTypes.func,
  getInventoriesByEventIdProp: PropTypes.func,
  getUsersInventoriesByEventIdProp: PropTypes.func,
};

EventItemView.defaultProps = {
  currentUser: {},
  event: {},
  match: {},
  joinEvent: () => {},
  leaveEvent: () => {},
  unCancel: () => {},
  deleteEvent: () => {},
  reset: () => {},
  getEventProp: () => {},
  getUnitsOfMeasuringProp: () => {},
  getInventoriesByEventIdProp: () => {},
  getUsersInventoriesByEventIdProp: () => {},
};

export default EventItemView;
