/* eslint-disable no-multi-assign */
import React, { useEffect, useState } from "react";
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
import PropTypes from "prop-types";
import renderPeriod from "./render-period";
import useStyles from "./CardStyleConst";
import PhotoService from "../../services/PhotoService";
import { EVENT_DEFAULT_IMAGE } from "../../constants/eventConstants";

const photoService = new PhotoService();

const EventSchedule = ({ item }) => {
  const [eventImage, setEventImage] = useState(EVENT_DEFAULT_IMAGE);
  useEffect(() => {
    photoService.getPreviewEventPhoto(item.eventId).then(eventPreviewImage => {
      if (eventPreviewImage != null) {
        setEventImage(URL.createObjectURL(eventPreviewImage));
      }
    });
    return () => URL.revokeObjectURL(eventImage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const classes = useStyles;
  const { id, frequency, periodicity, lastRun, nextRun, title, eventId } = item;
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
              src={eventImage}
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
                // onClick={disableCreateButton}
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
};

EventSchedule.propTypes = {
  item: PropTypes.object,
};

EventSchedule.defaultProps = {
  item: {},
};

export default EventSchedule;
