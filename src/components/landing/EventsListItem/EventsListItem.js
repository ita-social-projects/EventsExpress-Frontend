/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import PhotoService from "../../../services/PhotoService";
import eventDefaultImage from "../../../constants/eventDefaultImage";
import parseDate from "../../helpers/parseDate";
import "./EventsListItem.scss";

const photoService = new PhotoService();

class EventsListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventImage: eventDefaultImage,
    };
  }

  componentDidMount() {
    photoService
      .getPreviewEventPhoto(this.props.event.id)
      .then(eventPreviewImage => {
        if (eventPreviewImage != null) {
          this.setState({ eventImage: URL.createObjectURL(eventPreviewImage) });
        }
      });
  }

  componentWillUnmount() {
    URL.revokeObjectURL(this.state.eventImage);
  }

  render() {
    const { event } = this.props;

    return (
      <div className="card__item">
        <div className="card__item_photo">
          <img src={this.state.eventImage} alt="Event_photo" />
        </div>
        <div className="card__item_content">
          <h2 className="card__item_header">{event.title}</h2>
          <div className="card__item_description">
            {`${event.description.slice(0, 150)}...`}
          </div>
          <div className="card__item_bottom-row">
            <span className="card__item_footer">{event.location}</span>
            <span className="card__item_footer">
              {parseDate(event.dateFrom)}
            </span>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              htmlFor="favorite"
              className="heart__icon add__favorite"
            ></label>
            <button
              type="button"
              name="favorite"
              id="favorite"
              onClick={() => {
                console.log("add to favorite");
              }}
            ></button>

            <NavLink to={`/home/events/${event.id}`} className="bttn">
              View detail
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

EventsListItem.defaultProps = {
  event: {},
};

EventsListItem.propTypes = {
  event: PropTypes.object,
};

export default EventsListItem;
