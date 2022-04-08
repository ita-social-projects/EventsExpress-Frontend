import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./landing.css";
import { getUpcomingEvents } from "../../../actions/event/event-list-action";
import HeadArticle from "../HeadArticle/HeadArticle";
import landingConstants from "../../../constants/landingConstants";
import EventsViewMode from "../EventsViewMode/EventsViewMode";
import viewModeSwitcher from "../../helpers/landingUtils";
import {
  viewModeTypes,
  VIEW_MODE_KEY_FOR_LOCAL_STORAGE,
} from "../../../constants/EventsViewModeConstants";
import SectionHeader from "../../SectionHeader/SectionHeader";

const { UPCOMING_EVENTS } = landingConstants;
const { SLIDER } = viewModeTypes;

const Landing = ({ getUpcomingEventsDispatch, events }) => {
  const viewMode =
    localStorage.getItem(VIEW_MODE_KEY_FOR_LOCAL_STORAGE) || SLIDER;
  const [eventsViewMode, setEventsViewMode] = useState(viewMode);

  useEffect(() => {
    getUpcomingEventsDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: NOWHERE USED BUT PROBABLY IT NEED
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
            <SectionHeader title={UPCOMING_EVENTS} />
          </section>
          <div className="container">
            <EventsViewMode setViewMode={setEventsViewMode} />
            {viewModeSwitcher(items, eventsViewMode)}
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
