import React from "react";
import PropTypes from "prop-types";
import EventsForProfile from "../event/EventsForProfile/EventsForProfile";
import "moment-timezone";
import "./User-profile.css";
import eventsProfile from "../../constants/profileEvents";

const Events = ({ events, currentUser, typeOfEvents }) => {
  const { data } = events;

  const { NO_RESULTS } = eventsProfile;
  return (
    <div className="shadow pl-2 pr-2 pb-2 mb-5 bg-white rounded">
      <EventsForProfile
        dataList={data.items}
        page={data.pageViewModel.pageNumber}
        totalPages={data.pageViewModel.totalPages}
        currentUser={currentUser}
        callback={typeOfEvents}
      />

      {!data.items.length && (
        <div id="notfound" className="w-100">
          <div className="notfound">
            <div className="notfound-404">
              <div className="h1">{NO_RESULTS}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;

Events.propTypes = {
  events: PropTypes.object,
  currentUser: PropTypes.string,
  typeOfEvents: PropTypes.func,
};

Events.defaultProps = {
  events: {},
  currentUser: "",
  typeOfEvents: () => {},
};
