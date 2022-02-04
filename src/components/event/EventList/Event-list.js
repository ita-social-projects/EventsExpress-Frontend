import React, { useEffect } from "react";
import { parse as queryStringParse } from "query-string";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import RenderList from "../RenderList/RenderList";
import EventCard from "../EventItem/Event-item";
import getQueryStringByFilter from "../../helpers/filterHelper";
import eventStatusEnum from "../../../constants/eventStatusEnum";
import {
  resetEvents,
  updateEventsFilters,
} from "../../../actions/event/event-list-action";
import { changeEventStatus } from "../../../actions/event/event-item-view-action";

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

  const renderSingleItem = item => (
    <EventCard
      key={item.id + item.Active}
      item={item}
      current_user={currentUser}
      onBlock={onBlock}
      onUnBlock={onUnBlock}
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
      dispatch(changeEventStatus(eventId, reason, eventStatusEnum.Blocked)),
    onUnBlock: (eventId, reason) =>
      dispatch(changeEventStatus(eventId, reason, eventStatusEnum.Active)),
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
};

export default withRouter(connect(null, mapDispatchToProps)(EventList));
