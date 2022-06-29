import React, { useEffect } from "react";
// import { parse as queryStringParse } from "query-string";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import RenderList from "../RenderList/RenderList";
// import EventCard from "../EventItem/EventItem";
import {
  CARD_TYPE,
  // EVENT_STATUS_ENUM,
} from "../../../constants/eventConstants";
// import { getQueryStringByFilter } from "../../helpers/filterHelper/filterHelper";
// import {
//   resetEvents,
//   updateEventsFilters,
// } from "../../../actions/event/event-list-action";
// import { changeEventStatus } from "../../../actions/event/event-item-view-action";

const EventList = ({ items, getEvents }) => {
  useEffect(() => {
    // if (totalPages > 1 && history.location.search === "") {
    //   history.push(`${history.location.pathname}?page=1`);
    // }
    // // TODO: Check useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getEvents();
  }, []);
  console.log(items);
  return (
    <RenderList
      cardType={CARD_TYPE.HOME}
      events={items}
      isItemsAvaliable
      isItemsFetched
    />
  );
};

// const mapDispatchToProps = dispatch => {
//   return {
//     resetEvents: () => dispatch(resetEvents()),
//     updateEventsFilters: filter => dispatch(updateEventsFilters(filter)),
//     onBlock: (eventId, reason) =>
//       dispatch(changeEventStatus(eventId, reason, EVENT_STATUS_ENUM.BLOCKED)),
//     onUnBlock: (eventId, reason) =>
//       dispatch(changeEventStatus(eventId, reason, EVENT_STATUS_ENUM.ACTIVE)),
//   };
// };

EventList.propTypes = {
  // totalPages: PropTypes.number,
  // history: PropTypes.object,
  // location: PropTypes.shape({
  //   search: PropTypes.string,
  //   pathname: PropTypes.string,
  // }),
  getEvents: PropTypes.func,
  items: PropTypes.array,
};

EventList.defaultProps = {
  // totalPages: null,
  // history: {},
  // location: {
  //   search: "",
  //   pathname: "",
  // },
  getEvents: () => {},
  items: [],
};

export default EventList;
