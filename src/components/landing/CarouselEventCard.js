﻿import React, { Component } from "react";
import PropTypes from "prop-types";
import PhotoService from "../../services/PhotoService";
import eventDefaultImage from "../../constants/eventDefaultImage";
import parseDate from "../helpers/parseDate";

const photoService = new PhotoService();

class CarouselEventCard extends Component {
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
      <div className="card">
        <img className="card-img-top" src={this.state.eventImage} alt="Event" />
        <div className="card-body">
          <p className="card-text text-muted">{parseDate(event.dateFrom)}</p>
          <p className="card-text">{event.title}</p>
          {/* <p className="card-text text-muted">{event.owners[0].username}</p> */}
          <div className="row">
            <div className="col-md-6">Participants: {event.countVisitor}</div>
            <div className="col-md-6">
              <a href={`/home/events/${event.id}`} className="link">
                Join event
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CarouselEventCard.defaultProps = {
  event: {},
};

CarouselEventCard.propTypes = {
  event: PropTypes.object,
};

export default CarouselEventCard;
