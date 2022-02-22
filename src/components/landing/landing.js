import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SliderForEvents from "./SliderForEvents/SliderForEvents";
import EventsListItem from "./EventsListItem/EventsListItem";
import ModalWind from "../modal-wind";
import AuthComponent from "../../security/authComponent";
import "./landing.css";
import { getUpcomingEvents } from "../../actions/event/event-list-action";
import HeadArticle from "./HeadArticle";
import EventMatrix from "./EventMatrix/EventMatrix";

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
        <article className="works-article text-center">
          <div className="works-title">
            <h2>How EventsExpress Works</h2>
          </div>
          <div className="icons-wrapper">
            <div>
              <i className="fas fa-hand-pointer"></i>
              <h3>Search Events</h3>
            </div>
            <div>
              <i className="fas fa-user-plus"></i>
              <h3>Create Your Own Event</h3>
            </div>
            <div>
              <i className="fas fa-search"></i>
              <h3>Find Events Partners</h3>
            </div>
            <div>
              <i className="far fa-smile"></i>
              <h3>Get Connected</h3>
            </div>
            <div>
              <i className="fas fa-users"></i>
              <h3>Have Fun Together</h3>
            </div>
          </div>
          <AuthComponent onlyAnonymous>
            <div className="text-center">
              <ModalWind
                renderButton={action => (
                  <button
                    className="btn btn-warning"
                    onClick={() => action()}
                    type="button"
                  >
                    Join EventsExpress
                  </button>
                )}
              />
            </div>
          </AuthComponent>
        </article>
        {items.length !== 0 && (
          <>
            <article className="events-article">
              <div className="row">
                <div className="col-md-10">
                  <h3>Upcoming events</h3>
                </div>
              </div>
            </article>
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
