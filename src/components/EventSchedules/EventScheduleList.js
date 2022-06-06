import React from "react";
import PropTypes from "prop-types";
import EventSchedule from "./EventScheduleItem";
import "./EventSchedule.scss";

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
          <div id="notfound" className="w-100">
            <div className="notfound">
              <div className="notfound-404">
                <div className="h1">No result</div>
                {/* TODO: add const */}
              </div>
            </div>
          </div>
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
