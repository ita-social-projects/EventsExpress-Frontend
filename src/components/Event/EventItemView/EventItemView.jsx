import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import propTypes from "prop-types";
import RatingContainer from "../../../containers/RatingContainer/RatingContainer";
import Comment from "../../Comment/Comment";
import "moment-timezone";
import "../../Layout/Colorlib.scss";
import "./EventItemView.scss";
import EventVisitors from "../EventVisitors/EventVisitors";
import EventLeaveModal from "../EventLeaveModal/EventLeaveModal";
import InventoryList from "../../Inventory/InventoryList";
import DisplayLocation from "../Map/DisplayLocation";

import { ADULT_AGE } from "../../../constants/userConstants";
import {
  EVENT_DEFAULT_IMAGE,
  EVENT_ITEM_VIEW_CONSTS,
  EVENT_STATUS_ENUM,
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
  eventStatusBlock,
  maxParticipantsBlock,
  isAppropriateAgeBlock,
  dateBlock,
} from "./EventItemsViewBlocks";

const photoService = new PhotoService();

// TODO refactor components
export default class EventItemView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventImage: EVENT_DEFAULT_IMAGE,
    };
  }

  componentDidMount() {
    photoService
      .getFullEventPhoto(this.props.event.data.id)
      .then(eventFullImage => {
        if (eventFullImage != null) {
          this.setState({ eventImage: URL.createObjectURL(eventFullImage) });
        }
      });
  }

  componentWillUnmount() {
    URL.revokeObjectURL(this.state.eventImage);
  }

  renderCategories = arr => {
    return arr.map(x => (
      <span key={x.id}>
        {"#"}
        {x.name}
      </span>
    ));
  };

  render() {
    const { currentUser } = this.props;
    const {
      id,
      categories,
      title,
      dateFrom,
      dateTo,
      description,
      isPublic,
      isOnlyForAdults,
      eventStatus,
      maxParticipants,
      visitors,
      organizers,
    } = this.props.event.data;

    const today = moment().startOf("day");
    const visitorsEnum = {
      approvedUsers: visitors.filter(x => x.userStatusEvent === 0),
    };

    const iWillVisitIt = visitors.find(x => x.id === currentUser.id);
    const isFutureEvent = new Date(dateFrom) >= new Date().setHours(0, 0, 0, 0);
    const isMyEvent =
      organizers.find(x => x.id === currentUser.id) !== undefined;
    const isFreePlace = visitorsEnum.approvedUsers.length < maxParticipants;
    const isAdult =
      moment.duration(today.diff(moment(currentUser.birthday))).asYears() >=
      ADULT_AGE;

    return (
      <div className="container-fluid mt-1">
        <div className="row">
          <div className="col-9">
            <div className="col-12">
              <img
                src={this.state.eventImage}
                id={`eventFullPhotoImg${id}`}
                alt="Event"
                className="w-100"
              />
              <div className="text-block">
                <span className="title">{title}</span>
                <br />
                {eventStatusBlock(isPublic)}
                <br />
                {maxParticipantsBlock(maxParticipants, visitors)}
                <br />
                {dateBlock(dateTo, dateFrom)}
                <br />
                {this.props.event.data.location && (
                  <DisplayLocation location={this.props.event.data.location} />
                )}
                {this.renderCategories(categories)}
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
                      submitCallback={this.props.onCancel}
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
                      submitCallback={this.props.onDelete}
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
                      submitCallback={this.props.onUnCancel}
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
              <InventoryList eventId={id} />
            </div>

            <div className="overflow-auto shadow p-3 mx-3 mb-5 mt-2 bg-white rounded">
              <Comment match={this.props.match} />
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
                      onClick={this.props.onJoin}
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
                    submitLeave={this.props.onLeave}
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
      </div>
    );
  }
}

// TODO: Check prop match
EventItemView.propTypes = {
  event: propTypes.object,
  currentUser: propTypes.object,
  onCancel: propTypes.func,
  onDelete: propTypes.func,
  onUnCancel: propTypes.func,
  onJoin: propTypes.func,
  onLeave: propTypes.func,
  match: propTypes.object,
};

EventItemView.defaultProps = {
  event: {},
  currentUser: {},
  onCancel: () => {},
  onDelete: () => {},
  onUnCancel: () => {},
  onJoin: () => {},
  onLeave: () => {},
  match: {},
};
