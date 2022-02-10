﻿import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'moment-timezone';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import SocialShareMenu from './share/SocialShareMenu';
import EventActiveStatus from './event-active-status';
import DisplayLocation from './map/display-location';
import eventStatusEnum from '../../constants/eventStatusEnum';
import { useStyle } from '../event/CardStyle';
import AuthComponent from "../../security/authComponent";
import EventHeader from './event-item-header';
import { Roles } from '../../constants/userRoles';
import PhotoService from '../../services/PhotoService';
import { eventDefaultImage } from '../../constants/eventDefaultImage';
import BookmarkButton from './bookmarks/bookmark-button';

const useStyles = useStyle;
const photoService = new PhotoService();

export default class EventCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            eventImage: eventDefaultImage
        }
    }

    componentDidMount() {
        photoService.getPreviewEventPhoto(this.props.item.id).then(
            eventPreviewImage => {
                if (eventPreviewImage != null) {
                    this.setState({ eventImage: URL.createObjectURL(eventPreviewImage) });
                }
            }
        );
    }

    componentWillUnmount() {
        URL.revokeObjectURL(this.state.eventImage);
    }

    renderCategories = arr => {
        return arr.map(x => <span key={x.id}>#{x.name}</span>);
    }
    render() {
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
            organizers,
            members,
        } = this.props.item;

        const INT32_MAX_VALUE = null;
        const categoriesNotDisplayed = categories.length - 2;
        const restCategories = " ... " + categoriesNotDisplayed + " more";
        const displayedCategories = this.renderCategories(categories.slice(0, 2));

        return (
            <div className={"col-12 col-sm-8 col-md-6 col-xl-4 mt-3"}>
                <Card
                    className={classes.cardCanceled}
                    style={{
                        backgroundColor: (eventStatus === eventStatusEnum.Blocked) ? "gold" : "",
                        opacity: (eventStatus === eventStatusEnum.Canceled) ? 0.5 : 1

                    }}>
                    <EventHeader
                        members={members}
                        countVisitor={countVisitor}
                        organizers={organizers}
                        dateFrom={dateFrom}
                        title={title}
                    />
                    <CardMedia
                        className={classes.media}
                        title={title}>
                        <Link to={`/event/${id}/1`} id="LinkToEvent">
                            <img src={this.state.eventImage}
                                id={"eventPreviewPhotoImg" + id} alt="Event"
                                className="w-100" />
                        </Link>
                    </CardMedia>
                    {(maxParticipants < INT32_MAX_VALUE) &&
                        <CardContent>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {countVisitor}/{maxParticipants} Participants
                        </Typography>
                        </CardContent>
                    }
                    <CardContent>
                        {description &&
                            <Tooltip title={description.substr(0, 570) + (description.length > 570 ? '...' : '')} classes={{ tooltip: 'description-tooltip' }} >
                                <Typography variant="body2" color="textSecondary" className="description" component="p">
                                    {description.substr(0, 128)}
                                </Typography>
                            </Tooltip>
                        }
                    </CardContent>
                    <CardActions disableSpacing>
                        <div className='w-100'>
                            {this.props.item.location &&
                                <DisplayLocation
                                    location={this.props.item.location}
                                />
                            }
                            <br />
                            <div className="float-left">
                                {categories.length <= 2
                                    ? displayedCategories
                                    : [displayedCategories,
                                        <Typography variant="body2" color="textSecondary" component="span">
                                            {restCategories}
                                        </Typography>]
                                }

                            </div>
                            <div className='d-flex flex-row align-items-center justify-content-center float-right'>
                                <BookmarkButton event={this.props.item} />
                                {isOnlyForAdults &&
                                    <Tooltip title="Only for adults">
                                        <span className="age-icon">&#128286;</span>
                                    </Tooltip>
                                }
                                {!isPublic &&
                                    <Tooltip title="Private event">
                                        <IconButton>
                                            <Badge color="primary">
                                                <i className="fa fa-key" />
                                            </Badge>
                                        </IconButton>
                                    </Tooltip>
                                }
                                <AuthComponent rolesMatch={Roles.Admin}>
                                    <EventActiveStatus
                                        key={this.props.item.id + this.props.item.eventStatus}
                                        eventStatus={this.props.item.eventStatus}
                                        eventId={this.props.item.id}
                                        onBlock={this.props.onBlock}
                                        onUnBlock={this.props.onUnBlock} />
                                </AuthComponent>
                                <SocialShareMenu href={`${window.location.protocol}//${window.location.host}/event/${id}/1`} />
                            </div>
                        </div>
                    </CardActions>
                </Card>
            </div>
        );
    }
}
