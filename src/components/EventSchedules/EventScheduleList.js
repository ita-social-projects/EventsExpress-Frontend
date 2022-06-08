import React from "react";
import PropTypes from "prop-types";
import EventSchedule from "./EventScheduleItem";
import "./EventSchedule.scss";
import NoResult from "../shared/NoResult/NoResult";

const EventSchedulesList = ({ currentUser, dataList }) => {
  return (
    <>
      <div className="container">
        {dataList.length === 0 ? (
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
          <NoResult
            title="Нou have no events yet"
            subTitle="You have not yet created events with the ability to repeat them"
            photo="https://res.cloudinary.com/wunu/image/upload/v1654537602/eventexpress/folder-is-empty-4064360-3363921_y9cgvg.png"
          />
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
