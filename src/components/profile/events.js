import React from "react";
import PropTypes from "prop-types";
import EventsForProfile from "../event/EventsForProfile/EventsForProfile";
import "moment-timezone";
import "./User-profile.css";

const Events = ({ events, currentUser, typeOfEvents }) => {
  const { data } = events;

  return (
    <div className="shadow pl-2 pr-2 pb-2 mb-5 bg-white rounded">
      <EventsForProfile
        data_list={data.items}
        page={data.pageViewModel.pageNumber}
        totalPages={data.pageViewModel.totalPages}
        current_user={currentUser}
        callback={typeOfEvents}
      />

      {!data.items.length && (
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

export default Events;

Events.propTypes = {
  events: PropTypes.array,
  data: PropTypes.array,
  items: PropTypes.array,
  pageViewModel: PropTypes.shape({
    pageNumber: PropTypes.number,
    totalPages: PropTypes.number,
  }),
  currentUser: PropTypes.object,
  typeOfEvents: PropTypes.oneOf(PropTypes.string, PropTypes.array),
};

Events.defaultProps = {
  events: [],
  data: [],
  items: [],
  pageViewModel: PropTypes.shape({
    pageNumber: null,
    totalPages: null,
  }),
  currentUser: {},
  typeOfEvents: "",
};
