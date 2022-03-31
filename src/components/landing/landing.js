import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SliderForEvents from "./SliderForEvents/SliderForEvents";
import EventsListItem from "./EventsListItem/EventsListItem";
import "./landing.css";
import { getUpcomingEvents } from "../../actions/event/event-list-action";
import HeadArticle from "./HeadArticle";
import EventMatrix from "./EventMatrix/EventMatrix";
import landingConstants from "../../constants/landingConstants";

const { UPCOMING_EVENTS } = landingConstants;
class Landing extends Component {
  componentDidMount() {
    this.props.getUpcomingEvents();
  }

  handleClick = () => {
    this.props.onSubmit();
  };

  render() {
    const { items } = this.props.events.data;
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
              <SliderForEvents events={items} />
            </div>
            <div className="container">
              {items.length !== 0 && <EventMatrix events={items} />}
            </div>
            <div className="container">
              {items.map(event => (
                <EventsListItem key={event.id} event={event} />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events,
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUpcomingEvents: () => dispatch(getUpcomingEvents()),
  };
};

Landing.defaultProps = {
  events: {},
  getUpcomingEvents: () => {},
  onSubmit: () => {},
};

Landing.propTypes = {
  events: PropTypes.object,
  getUpcomingEvents: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
