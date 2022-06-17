import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Landing.scss";
import { getUpcomingEvents } from "../../../actions/event/eventListAction";
import HeadArticle from "../HeadArticle/HeadArticle";
import EventsViewMode from "../EventsViewMode/EventsViewMode";
import viewModeSwitcher from "../../helpers/landingUtils";
import {
  VIEW_MODE_TYPES,
  VIEW_MODE_KEY_FOR_LOCAL_STORAGE,
} from "../../../constants/eventConstants";
import SearchInput from "../../SearchInput/SearchInput";

const { SLIDER } = VIEW_MODE_TYPES;

const Landing = ({ getUpcomingEventsDispatch, events }) => {
  const [filterTitle, setFilterTitle] = useState("");
  const viewMode =
    localStorage.getItem(VIEW_MODE_KEY_FOR_LOCAL_STORAGE) || SLIDER;
  const [eventsViewMode, setEventsViewMode] = useState(viewMode);

  useEffect(() => {
    getUpcomingEventsDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { items } = events.data;
  return (
    <div className="main">
      <HeadArticle />
      {!!items.length && (
        <div className="container">
          <div className="upcoming__events__navigation">
            <SearchInput
              searchText={filterTitle}
              searchFunc={setFilterTitle}
              name="search"
            />
            <EventsViewMode setViewMode={setEventsViewMode} />
          </div>
          {viewModeSwitcher(items, eventsViewMode, filterTitle)}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    events: state.events,
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUpcomingEventsDispatch: () => dispatch(getUpcomingEvents()),
  };
};

Landing.defaultProps = {
  events: {},
  getUpcomingEventsDispatch: () => {},
  // onSubmit: () => {},
};

Landing.propTypes = {
  events: PropTypes.object,
  getUpcomingEventsDispatch: PropTypes.func,
  // onSubmit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
