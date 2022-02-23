import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./landing.css";
import { getUpcomingEvents } from "../../actions/event/event-list-action";
import HeadArticle from "./HeadArticle";
import landingConstants from "../../constants/landingConstants";
import EventsViewMode from "./EventsViewMode/EventsViewMode";
import viewModeSwitcher from "../helpers/landingUtils";

const { UPCOMING_EVENTS } = landingConstants;

const Landing = ({ getUpcomingEventsDispatch, events }) => {
  const [eventsViewMode, setEventsViewMode] = useState("slider");

  useEffect(() => {
    getUpcomingEventsDispatch();
  }, [getUpcomingEventsDispatch]);

  // nowhere used
  // const handleClick = () => {
  //   onSubmit();
  // };

  const { items } = events.data;

  return (
    <div className="main">
      <HeadArticle />
      {items.length !== 0 && (
        <>
          {/* TODO: I think this is a temporary solution. Work on this landing page still needs to be done and will be done in the future */}
          <section className="main__upcoming">
            <h3>{UPCOMING_EVENTS}</h3>
          </section>
          <div className="container">
            <EventsViewMode setViewMode={setEventsViewMode} />
            {viewModeSwitcher(items, eventsViewMode, setEventsViewMode)}
          </div>
        </>
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
