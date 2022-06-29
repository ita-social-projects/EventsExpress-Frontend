import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { connect } from "react-redux";
import Moment from "react-moment";
import PropTypes from "prop-types";
import "moment-timezone";
import renderPeriod from "./render-period";
import useStyles from "./CardStyleConst";
import SelectiveForm from "./SelectiveForm";
import getEvent from "../../actions/event/event-item-view-action";
import { EVENT_DEFAULT_IMAGE } from "../../constants/eventConstants";
import PhotoService from "../../services/PhotoService";

const photoService = new PhotoService();

class EventScheduleItemView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventImage: EVENT_DEFAULT_IMAGE,
    };
  }

  componentWillMount() {
    this.props.getEvent(this.props.eventSchedule.data.eventId);
  }

  componentDidMount() {
    photoService
      .getPreviewEventPhoto(this.props.eventSchedule.data.eventId)
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
    const classes = useStyles;
    const { currentUser } = this.props;
    const { frequency, periodicity, lastRun, nextRun, title, eventId, owners } =
      this.props.eventSchedule.data;
    const period = renderPeriod(periodicity, frequency);
    const isMyEvent = owners.find(x => x.id === currentUser.id) !== undefined;
    return (
      <>
        <div className="container-fluid mt-1">
          <div className="col-8 col-sm-10 col-md-8 col-xl-8 mt-3">
            <Card className={classes.card}>
              <CardHeader subheader={`Reccurent event ${period}`} />
              <CardMedia className={classes.media} title={title}>
                <img
                  src={this.state.eventImage}
                  id={`eventPreviewPhotoImg${eventId}`}
                  alt="Event"
                  className="w-100"
                />
              </CardMedia>
              <div className="text-block">
                <CardContent>
                  <div className="title"> {title} </div>
                  <div>
                    {"Last Run\r"}
                    <Moment className="ml-2" format="D MMM YYYY" withTitle>
                      {lastRun}
                    </Moment>
                  </div>
                  <div>
                    {"Next Run\r"}
                    <Moment className="ml-2" format="D MMM YYYY" withTitle>
                      {nextRun}
                    </Moment>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
          <div className="col-8 col-sm-10 col-md-8 col-xl-8 mt-3">
            {isMyEvent && <SelectiveForm />}
          </div>
        </div>
      </>
    );
  }
}

EventScheduleItemView.propTypes = {
  eventSchedule: PropTypes.object,
  getEvent: PropTypes.func,
  currentUser: PropTypes.object,
};

EventScheduleItemView.defaultProps = {
  eventSchedule: {},
  getEvent: () => {},
  currentUser: {},
};

const mapDispatchToProps = dispatch => ({
  getEvent: id => dispatch(getEvent(id)),
});

export default connect(null, mapDispatchToProps)(EventScheduleItemView);
