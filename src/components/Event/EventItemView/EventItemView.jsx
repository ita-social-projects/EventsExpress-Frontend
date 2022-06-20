import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
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

import { USER_STATUS_ENUM } from "../../../constants/userConstants";
import {
  EVENT_DEFAULT_IMAGE,
  EVENT_STATUS_ENUM,
} from "../../../constants/eventConstants";
import SimpleModalWithDetails from "../../helpers/simple-modal-with-details";
import PhotoService from "../../../services/PhotoService";

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
    return arr.map(x => <span key={x.id}>#{x.name}</span>);
  };

  getUserEventStatus = visitor => {
    if (visitor !== undefined) {
      switch (visitor.userStatusEvent) {
        case USER_STATUS_ENUM.APPROVED:
          return (
            <span className="alert alert-success shadow" role="alert">
              You are gonna visit.
            </span>
          );
        case USER_STATUS_ENUM.DENIED:
          return (
            <span className="alert alert-danger shadow" role="alert">
              Denied participation.
            </span>
          );
        case USER_STATUS_ENUM.PENDING:
          return (
            <span className="alert alert-warning shadow" role="alert">
              Wait until admin approve your request.
            </span>
          );
        default:
          return null;
      }
    }
    return (
      <span className="alert alert-secondary shadow" role="alert">
        You are not in event yet.
      </span>
    );
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
      owners,
    } = this.props.event.data;

    const today = moment().startOf("day");
    const INT32_MAX_VALUE = 2147483647;
    const visitorsEnum = {
      approvedUsers: visitors.filter(x => x.userStatusEvent === 0),
      deniedUsers: visitors.filter(x => x.userStatusEvent === 1),
      pendingUsers: visitors.filter(x => x.userStatusEvent === 2),
    };

    const iWillVisitIt = visitors.find(x => x.id === currentUser.id);
    const isFutureEvent = new Date(dateFrom) >= new Date().setHours(0, 0, 0, 0);
    const isMyEvent = owners.find(x => x.id === currentUser.id) !== undefined;
    const isFreePlace = visitorsEnum.approvedUsers.length < maxParticipants;
    const isAdult =
      moment.duration(today.diff(moment(currentUser.birthday))).asYears() >= 18;

    const canEdit = isFutureEvent && isMyEvent;
    const isAppropriateAge = !isOnlyForAdults || isAdult;
    const canJoin =
      isFutureEvent &&
      isFreePlace &&
      !iWillVisitIt &&
      !isMyEvent &&
      eventStatus === EVENT_STATUS_ENUM.ACTIVE &&
      isAppropriateAge;
    const canLeave =
      isFutureEvent &&
      !isMyEvent &&
      iWillVisitIt &&
      visitorsEnum.deniedUsers.find(x => x.id === currentUser.id) == null &&
      eventStatus === EVENT_STATUS_ENUM.ACTIVE;
    const canCancel =
      isFutureEvent &&
      currentUser.id != null &&
      isMyEvent &&
      eventStatus !== EVENT_STATUS_ENUM.CANCELED;
    const canUncancel =
      isFutureEvent && isMyEvent && eventStatus === EVENT_STATUS_ENUM.CANCELED;
    const isMyPrivateEvent = isMyEvent && !isPublic;
    const canDeleted = isMyEvent && eventStatus === EVENT_STATUS_ENUM.CANCELED;

    return (
      <>
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
                  {isPublic ? (
                    <span>Public event</span>
                  ) : (
                    <span>Private event</span>
                  )}
                  <br />
                  {maxParticipants < INT32_MAX_VALUE ? (
                    <span className="maxParticipants">
                      {visitorsEnum.approvedUsers.length}/{maxParticipants}
                      <span className="pl-2">Participants</span>
                    </span>
                  ) : (
                    <span className="maxParticipants">
                      {visitorsEnum.approvedUsers.length}
                      <span className="pl-2">Participants</span>
                    </span>
                  )}
                  <br />
                  <span>
                    <Moment format="D MMM YYYY" withTitle>
                      {dateFrom}
                    </Moment>
                    {dateTo !== dateFrom && (
                      <>
                        -
                        <Moment format="D MMM YYYY" withTitle>
                          {dateTo}
                        </Moment>
                      </>
                    )}
                  </span>
                  <br />
                  {this.props.event.data.location && (
                    <DisplayLocation
                      location={this.props.event.data.location}
                    />
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
                    Change Event Status
                  </button>
                  <div className="dropdown-menu">
                    {canEdit && (
                      <Link to={`/editEvent/${id}`}>
                        <button type="button" className="btn btn-danger mb-1">
                          Edit
                        </button>
                      </Link>
                    )}
                    {canCancel && (
                      <SimpleModalWithDetails
                        button={
                          <button type="button" className="btn btn-danger ">
                            Cancel
                          </button>
                        }
                        submitCallback={this.props.onCancel}
                        data="Are you sure?"
                      />
                    )}
                    {canDeleted && (
                      <SimpleModalWithDetails
                        button={
                          <button type="button" className="btn btn-danger ">
                            Delete
                          </button>
                        }
                        submitCallback={this.props.onDelete}
                        data="Are you sure?"
                      />
                    )}
                    {canUncancel && (
                      <SimpleModalWithDetails
                        button={
                          <button type="button" className="btn btn-danger ">
                            Undo cancel
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
                  <span className="font-weight-bold font">18+</span>
                  <br />
                  This event is only for adults.
                </div>
              )}
              <div className="text-box-big overflow-auto shadow p-3 mx-3 mb-5 mt-2 bg-white rounded">
                {eventStatus === EVENT_STATUS_ENUM.CANCELED && (
                  <div className="text-center text-uppercase cancel-text">
                    <i className="fas fa-exclamation-triangle text-warning" />
                    <span> This event is canceled </span>
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
                  <div className="d-flex justify-content-center">
                    {isAppropriateAge ? (
                      this.getUserEventStatus(
                        visitors.find(x => x.id === currentUser.id),
                      )
                    ) : (
                      <span className="alert alert-warning shadow" role="alert">
                        You do not meet age requirements for this event.
                      </span>
                    )}
                  </div>
                  {canJoin && (
                    <div>
                      <br />
                      <button
                        onClick={this.props.onJoin}
                        type="button"
                        className="btn btn-success join-leave"
                        variant="contained"
                      >
                        Join
                      </button>
                    </div>
                  )}
                  {canLeave && (
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
                admins={owners}
                visitors={visitorsEnum}
                isMyPrivateEvent={isMyPrivateEvent}
                isMyEvent={isMyEvent}
                current_user_id={currentUser.id}
              />
            </div>
          </div>
        </div>
      </>
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
