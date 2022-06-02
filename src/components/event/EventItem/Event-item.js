﻿import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "moment-timezone";
import Card from "@material-ui/core/Card";
import propTypes from "prop-types";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Badge from "@material-ui/core/Badge";
import SocialShareMenu from "../share/SocialShareMenu";
import EventActiveStatus from "../EventActiveStatus/Event-active-status";
import DisplayLocation from "../map/display-location";
import eventStatusEnum from "../../../constants/eventStatusEnumConstants";
import useStyle from "../CardStyle/CardStyle";
import AuthComponent from "../../../security/authComponent";
import EventHeader from "../EventItemHeader/Event-item-header";
import Roles from "../../../constants/userRolesConstants";
import PhotoService from "../../../services/PhotoService";
import eventDefaultImage from "../../../constants/eventDefaultImageConstants";
import EventItemConstants from "../../../constants/eventItemConstants";

const useStyles = useStyle;
const photoService = new PhotoService();

const EventCard = props => {
  const { item, onBlock, onUnBlock } = props;
  const [eventImage, setEventImage] = useState(eventDefaultImage);

  useEffect(() => {
    photoService.getPreviewEventPhoto(item.id).then(eventPreviewImage => {
      if (eventPreviewImage) {
        setEventImage(URL.createObjectURL(eventPreviewImage));
      }
    });
    return () => {
      URL.revokeObjectURL(eventImage);
    };
  });

  const renderCategories = arr => {
    return arr.map(x => <span key={x.id}>#{x.name}</span>);
  };
  const classes = useStyles;
  const {
    id,
    title,
    dateFrom,
    description,
    isPublic,
    isOnlyForAdults,
    maxParticipants,
    eventStatus,
    categories,
    countVisitor,
    organizers: owners,
    members,
  } = item;

  const categoriesNotDisplayed = categories.length - 2;
  const restCategories = ` ... ${categoriesNotDisplayed} more`;
  const displayedCategories = renderCategories(categories.slice(0, 2));

  return (
    <div className="col-12 col-sm-8 col-md-6 col-xl-4 mt-3">
      <Card
        className={classes.cardCanceled}
        style={{
          backgroundColor:
            eventStatus === eventStatusEnum.Blocked ? "gold" : "",
          opacity: eventStatus === eventStatusEnum.Canceled ? 0.5 : 1,
        }}
      >
        <EventHeader
          members={members}
          countVisitor={countVisitor}
          owners={owners}
          dateFrom={dateFrom}
          title={title}
        />
        <CardMedia className={classes.media} title={title}>
          <Link to={`/event/${id}/1`} id="LinkToEvent">
            <img
              src={eventImage}
              id={`eventPreviewPhotoImg${id}`}
              alt="Event"
              className="w-100"
            />
          </Link>
        </CardMedia>
        {maxParticipants && (
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {countVisitor}/{maxParticipants} {EventItemConstants.PARTICIPANTS}
            </Typography>
          </CardContent>
        )}
        <CardContent>
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
        <CardActions disableSpacing>
          <div className="w-100">
            {item.location && <DisplayLocation location={item.location} />}
            <br />
            <div className="float-left">
              {categories.length <= 2 ? (
                displayedCategories
              ) : (
                <>
                  {displayedCategories},
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="span"
                  >
                    {restCategories}
                  </Typography>
                  ,
                </>
              )}
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center float-right">
              {isOnlyForAdults && (
                <Tooltip title="Only for adults">
                  <span className="age-icon">&#128286;</span>
                </Tooltip>
              )}
              {!isPublic && (
                <Tooltip title="Private event">
                  <IconButton>
                    <Badge color="primary">
                      <i className="fa fa-key" />
                    </Badge>
                  </IconButton>
                </Tooltip>
              )}
              <AuthComponent rolesMatch={Roles.Admin}>
                <EventActiveStatus
                  key={item.id + item.eventStatus}
                  eventStatus={item.eventStatus}
                  eventId={item.id}
                  onBlock={onBlock}
                  onUnBlock={onUnBlock}
                />
              </AuthComponent>
              <SocialShareMenu
                href={`${window.location.protocol}//${window.location.host}/event/${id}/1`}
              />
            </div>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

EventCard.propTypes = {
  item: propTypes.object,
  onBlock: propTypes.func,
  onUnBlock: propTypes.func,
};

EventCard.defaultProps = {
  item: {},
  onBlock: () => {},
  onUnBlock: () => {},
};

export default EventCard;
