import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { renderPeriod } from "./render-period";
import { useStyles } from "./card-style-const";
import { eventDefaultImage } from "../../constants/eventDefaultImage";
import PhotoService from "../../services/PhotoService";

const photoService = new PhotoService();

export default class EventSchedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventImage: eventDefaultImage,
    };
  }

  componentDidMount() {
    photoService
      .getPreviewEventPhoto(this.props.item.eventId)
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
    const {
      id,
      isActive,
      frequency,
      periodicity,
      lastRun,
      nextRun,
      title,
      eventId,
    } = this.props.item;
    const period = renderPeriod(periodicity, frequency);
    return (
      <div className="col-12 col-sm-8 col-md-6 col-xl-4 mt-3">
        <Card className={classes.card}>
          <CardHeader
            title={title}
            subheader={
              <Moment format="D MMM YYYY" withTitle>
                {lastRun}
              </Moment>
            }
          />
          <CardMedia className={classes.media} title={title}>
            <Link to={`/eventSchedule/${id}`}>
              <img
                src={this.state.eventImage}
                id={`eventPreviewPhotoImg${eventId}`}
                alt="EventSchedule"
                className="w-100"
              />
            </Link>
          </CardMedia>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {period}
            </Typography>
            <Moment format="D MMM YYYY" withTitle>
              {nextRun}
            </Moment>
            <div className="mb-3 float-right">
              <Link to={`/event/${eventId}/1`}>
                <Button
                  className="ml-2"
                  style={{ background: "#3f51b50a" }}
                  fullWidth={false}
                  color="primary"
                  type="submit"
                  onClick={this.disableCreateButton}
                >
                  Go to Parent Event
                </Button>
              </Link>
            </div>
          </CardContent>
          <CardActions disableSpacing></CardActions>
        </Card>
      </div>
    );
  }
}
