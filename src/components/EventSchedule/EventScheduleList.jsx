import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./EventSchedule.scss";
import SpinnerWrapper from "../../containers/spinner";
import NoResult from "../shared/NoResult/NoResult";
import EventCard from "../Landing/EventCard/EventCard";
import { EVENT_NO_RESULT } from "../../constants/eventConstants";

const EventSchedulesList = ({ dataList, getEvents, loaded }) => {
  useEffect(() => {
    getEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
      <SpinnerWrapper showContent={loaded}>
        {dataList.length > 0 ? (
          <div className="eventsBlock">
            {dataList.map(item => (
              <EventCard key={item.id} event={item} />
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
  loaded: PropTypes.bool,
  dataList: PropTypes.array,
  getEvents: PropTypes.func,
};

EventSchedulesList.defaultProps = {
  loaded: false,
  dataList: [],
  getEvents: () => {},
};

export default EventSchedulesList;
