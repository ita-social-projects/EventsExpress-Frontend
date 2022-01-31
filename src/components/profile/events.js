import React from "react";
import PropTypes from "prop-types";
import EventsForProfile from "../event/EventsForProfile/EventsForProfile";
import "moment-timezone";
import "./User-profile.css";

const Events = ({ data, currentUser, typeOfEvents }) => {
  return (
    <div className="shadow pl-2 pr-2 pb-2 mb-5 bg-white rounded">
      <EventsForProfile
        data_list={data.items}
        page={data.pageViewModel.pageNumber}
        totalPages={data.pageViewModel.totalPages}
        currentUser={currentUser}
        callback={typeOfEvents}
      />

      {!(data.items && data.items.length > 0) && (
        <div id="notfound" className="w-100">
          <div className="notfound">
            <div className="notfound-404">
              <div className="h1">No Results</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Events.defaultProps = {
  data: [],
  currentUser: {},
  typeOfEvents: () => {},
};

Events.propTypes = {
  data: PropTypes.array,
  currentUser: PropTypes.object,
  typeOfEvents: PropTypes.func,
};

export default Events;
