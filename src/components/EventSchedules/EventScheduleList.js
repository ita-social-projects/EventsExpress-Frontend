import React from "react";
import PropTypes from "prop-types";
import EventSchedule from "./EventScheduleItem";
import "./EventSchedule.scss";
import NoResult from "../shared/NoResult/NoResult";

const EventSchedulesList = ({ currentUser, dataList }) => {
  return (
    <>
      <div className="container">
        {dataList.length > 0 ? (
          <div className="eventsBlock">
            {dataList.map(item => (
              <EventSchedule
                key={item.id}
                item={item}
                currentUser={currentUser}
              />
            ))}
          </div>
        ) : (
          <NoResult />
        )}
      </div>
    </>
  );
};

EventSchedulesList.propTypes = {
  dataList: PropTypes.array,
  currentUser: PropTypes.object,
};

EventSchedulesList.defaultProps = {
  dataList: [],
  currentUser: {},
};

export default EventSchedulesList;
