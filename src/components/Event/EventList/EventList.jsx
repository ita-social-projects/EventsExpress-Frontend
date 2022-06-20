import React, { useEffect } from "react";
import { parse as queryStringParse } from "query-string";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AiFillEdit } from "react-icons/ai";
import RenderList from "../RenderList/RenderList";
import EventCard from "../../Landing/EventCard/EventCard";
import getQueryStringByFilter from "../../helpers/filterHelper";
import { EVENT_STATUS_ENUM } from "../../../constants/eventConstants";
import {
  resetEvents,
  updateEventsFilters,
} from "../../../actions/event/event-list-action";
import { changeEventStatus } from "../../../actions/event/event-item-view-action";
import { ICON_PROPERTIES } from "../../../constants/draftConstants";

const EventList = ({
  totalPages,
  history,
  currentUser,
  onBlock,
  onUnBlock,
  ...props
}) => {
  useEffect(() => {
    if (totalPages > 1 && history.location.search === "") {
      history.push(`${history.location.pathname}?page=1`);
    }
    // TODO: Check useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages, history.location.search]);

  const handlePageChange = page => {
    const queryStringToObject = queryStringParse(history.location.search);
    if (history.location.search === "") {
      history.push(`${history.location.pathname}?page=${page}`);
    } else {
      queryStringToObject.page = page;
    }

    history.push(
      history.location.pathname + getQueryStringByFilter(queryStringToObject),
    );
  };

  const additionalButtons = id => {
    return [
      <Link to={`/editEvent/${id}`} key={id}>
        <AiFillEdit
          key={5}
          cursor={ICON_PROPERTIES.CIRSOR_POINER}
          size={ICON_PROPERTIES.ICON_SIZE}
        />
      </Link>,
    ];
  };

  // <Link to={`/editEvent/${id}`} key={id}>
  // </Link>

  const renderSingleItem = item => (
    <EventCard
      key={item.id + item.Active}
      event={item}
      additionalButtons={additionalButtons(item.id)}
    />
  );

  return (
    <RenderList
      {...props}
      renderSingleItem={renderSingleItem}
      handlePageChange={handlePageChange}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    resetEvents: () => dispatch(resetEvents()),
    updateEventsFilters: filter => dispatch(updateEventsFilters(filter)),
    onBlock: (eventId, reason) =>
      dispatch(changeEventStatus(eventId, reason, EVENT_STATUS_ENUM.BLOCKED)),
    onUnBlock: (eventId, reason) =>
      dispatch(changeEventStatus(eventId, reason, EVENT_STATUS_ENUM.ACTIVE)),
  };
};

EventList.propTypes = {
  totalPages: PropTypes.number,
  history: PropTypes.object,
  location: PropTypes.shape({
    search: PropTypes.string,
    pathname: PropTypes.string,
  }),
  currentUser: PropTypes.object,
  onBlock: PropTypes.func,
  onUnBlock: PropTypes.func,
  onEdit: PropTypes.func,
};

EventList.defaultProps = {
  totalPages: null,
  history: {},
  location: {
    search: "",
    pathname: "",
  },
  currentUser: {},
  onBlock: () => {},
  onUnBlock: () => {},
  onEdit: () => {},
};

export default withRouter(connect(null, mapDispatchToProps)(EventList));
