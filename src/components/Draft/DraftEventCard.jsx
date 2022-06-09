﻿import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import CustomAvatar from "../CustomAvatar/CustomAvatar";
import "./EventItem.scss";
import useStyle from "../Event/CardStyle/CardStyle";
import SimpleModalWithDetails from "../helpers/simple-modal-with-details";
import PhotoService from "../../services/PhotoService";
import {EVENT_DEFAULT_IMAGE} from "../../constants/eventConstants";

const useStyles = useStyle;
const photoService = new PhotoService();

export default class DraftEventCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventImage: EVENT_DEFAULT_IMAGE,
    };
  }

  componentDidMount() {
    photoService
      .getPreviewEventPhoto(this.props.item.id)
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
    const { id, title, dateFrom, description, owners } = this.props.item;
    return (
      <div className="col-12 col-sm-8 col-md-6 col-xl-4 mt-3">
        <Card className={classes.card}>
          <Link to={`/editEvent/${id}`} className="text-dark">
            <CardHeader
              avatar={
                <Button title={owners[0].username} className="btn-custom">
                  <Badge
                    overlap="circle"
                    badgeContent={owners.length}
                    color="primary"
                  >
                    <CustomAvatar
                      className={classes.avatar}
                      userId={owners[0].id}
                      name={owners[0].username}
                    />
                  </Badge>
                </Button>
              }
              title={title}
              subheader={
                <Moment format="D MMM YYYY" withTitle>
                  {dateFrom}
                </Moment>
              }
              classes={{ title: "title" }}
            />
            <CardMedia
              className={`${classes.media} d-flex justify-content-center`}
              title={title}
            >
              <img
                src={this.state.eventImage}
                id={`eventPreviewPhotoImg${id}`}
                alt="Event"
                className="w-100"
              />
            </CardMedia>
            <CardContent className="py-2">
              {description && (
                <Tooltip
                  title={
                    description.substr(0, 570) +
                    (description.length > 570 ? "..." : "")
                  }
                  classes={{ tooltip: "description-tooltip" }}
                >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="description"
                    component="p"
                  >
                    {description.substr(0, 128)}
                  </Typography>
                </Tooltip>
              )}
            </CardContent>
          </Link>
          <CardActions disableSpacing>
            <div className="w-100">
              <div className="d-flex flex-row align-items-center justify-content-center float-right">
                <SimpleModalWithDetails
                  submitCallback={reason => this.props.onDelete(id, reason)}
                  data="Are you sure?"
                  button={
                    <IconButton className="text-danger" size="medium">
                      <i className="fas fa-trash" />
                    </IconButton>
                  }
                />
              </div>
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}

DraftEventCard.defaultProps = {
  item: {},
  onDelete: () => {},
};

DraftEventCard.propTypes = {
  item: PropTypes.object,
  onDelete: PropTypes.func,
};
