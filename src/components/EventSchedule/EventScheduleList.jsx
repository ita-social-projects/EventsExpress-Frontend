import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./EventSchedule.scss";
import SpinnerWrapper from "../../containers/SpinnerContainer/SpinnerContainer";
import NoResult from "../shared/NoResult/NoResult";
import EventCard from "../Landing/EventCard/EventCard";
import { EVENT_NO_RESULT } from "../../constants/eventConstants";

const EventSchedulesList = ({ events, getEvents, isDataFetched, isItemsAvaliable }) => {
  useEffect(() => {
    getEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log('isItem', isItemsAvaliable);
  return (
    <div className="container">
      <SpinnerWrapper showContent={isDataFetched}>
        {isItemsAvaliable ? (
          <div className="eventsBlock">
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <NoResult
            title={EVENT_NO_RESULT.TITLE}
            subTitle={EVENT_NO_RESULT.SUB_TITLE}
            photo={EVENT_NO_RESULT.PHOTO}
            btnTitle={EVENT_NO_RESULT.BTN_TITLE}
          />
        )}
      </SpinnerWrapper>
    </div>
  );
};

EventSchedulesList.propTypes = {
  isDataFetched: PropTypes.bool,
  isItemsAvaliable: PropTypes.bool,
  events: PropTypes.array,
  getEvents: PropTypes.func,
};

EventSchedulesList.defaultProps = {
  isDataFetched: false,
  isItemsAvaliable: false,
  events: [],
  getEvents: () => {},
};

export default EventSchedulesList;
