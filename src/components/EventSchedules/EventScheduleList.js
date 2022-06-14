import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./EventSchedule.scss";
import SpinnerWrapper from "../../containers/spinner";
import NoResult from "../shared/NoResult/NoResult";
import EventCard from "../landing/EventCard/EventCard";

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
            title="Нou have no events yet"
            subTitle="You have not yet created events with the ability to repeat them"
            photo="https://res.cloudinary.com/wunu/image/upload/v1654537602/eventexpress/folder-is-empty-4064360-3363921_y9cgvg.png"
            btnTitle="Back"
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
