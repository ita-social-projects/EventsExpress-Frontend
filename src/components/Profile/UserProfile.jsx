/* eslint-disable no-magic-numbers */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect, Route, Switch, withRouter } from "react-router-dom";
import "moment-timezone";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import GENDERS from "../../constants/gendersVarietyConstants";
// import Event from "../Event/EventItem/EventItem";
import CustomAvatar from "../CustomAvatar/CustomAvatar";
import RatingAverage from "../Rating/RatingAverage";
import "./UserProfile.scss";
import Events from "./Events";
import AuthComponent from "../../security/authComponent";
import indexToTabName from "../../constants/indexToTabNameConstants";
import getAge from "../helpers/userAgeHelper/getUserAge";

const UserProfile = ({
  profile,
  currentUser,
  events,
  data,
  getUser,
  setAttitude,
  getPastEvents,
  getFutureEvents,
  getVisitedEvents,
  getEventsTogo,
  resetUser,
  ...props
}) => {
  const [state, setState] = useState(null);
  const splitPath = path => {
    const n = path.toLowerCase().split("/");
    return n[n.length - 1];
  };
  // const useComponentWillMount = () => {
  //   const { id } = props.match.params;
  //   const willMount = useRef(true);

  //   if (willMount.current) getUser(id);

  //   willMount.current = false;
  // };

  useEffect(() => {
    // DidMount
    setState({
      value: indexToTabName[splitPath(props.history.location.pathname)],
    });

    // WillMount
    // useComponentWillMount();

    // UnMount
    return () => {
      resetUser();
    };
  }, []);

  console.log("Profile:", profile, "data:", data, "user:", currentUser);

  // componentWillUpdate = newProps => {
  //   if (newProps.match.params.id !== this.props.match.params.id)
  //     this.props.getUser(newProps.match.params.id);
  //   if (newProps.currentUser !== this.props.currentUser)
  //     this.props.getUser(newProps.match.params.id);
  // };

  // componentDidUpdate(_, prevState) {
  //   const tabName =
  //     indexToTabName[this.splitPath(this.props.history.location.pathname)];
  //   if (prevState.value !== tabName) this.handleChange(_, tabName);
  // }

  const onLike = () => {
    setAttitude({
      userFromId: currentUser,
      userToId: data.id,
      attitude: 0,
    });
  };

  const onDislike = () => {
    setAttitude({
      userFromId: currentUser,
      userToId: data.id,
      attitude: 1,
    });
  };

  const onReset = () => {
    setAttitude({
      userFromId: currentUser,
      userToId: data.id,
      attitude: 2,
    });
  };

  const onFuture = page => {
    getFutureEvents(data.id, page);
  };

  const onPast = page => {
    getPastEvents(data.id, page);
  };

  const onVisited = page => {
    getVisitedEvents(data.id, page);
  };

  const onToGo = page => {
    getEventsTogo(data.id, page);
  };

  const renderCategories = arr =>
    arr.map(item => (
      <div key={item.id}>
        {"#"}
        {item.name}
      </div>
    ));

  // const renderEvents = arr =>
  //   arr.map(item => (
  //     <div className="col-4" key={item.id}>
  //       <Event item={item} />
  //     </div>
  //   ));

  const handleChange = (event, value) => {
    setState({ value });
    switch (value) {
      case 0:
        onFuture();
        break;
      case 1:
        onPast();
        break;
      case 2:
        onVisited();
        break;
      case 3:
        onToGo();
        break;
      default:
        setState({ value });
    }
  };

  const { name, email, birthday, gender, categories, id, attitude, rating } =
    data;
  const userId = data.id;
  const categoriesList = renderCategories(categories);
  const renderProp = (propName, value) => (
    <div className="row mb-3 font-weight-bold">
      <div className="col-4">{`${propName}:`}</div>
      <div className="col-8">{value || ""}</div>
    </div>
  );
  return (
    <>
      <div className="info">
        <AuthComponent>
          <div className="col-4 user">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="user-profile-avatar">
                <CustomAvatar size="big" name={name} userId={id} />
              </div>
              <RatingAverage value={rating} direction="row" />

              <div className="row justify-content-center">
                <Tooltip
                  title="Like this user"
                  placement="bottom"
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    className={!attitude ? "text-success" : ""}
                    onClick={attitude ? onLike : onReset}
                  >
                    <i className="fas fa-thumbs-up" />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="Dislike this user"
                  placement="bottom"
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    className={attitude === 1 ? "text-danger" : ""}
                    onClick={attitude !== 1 ? onDislike : onReset}
                  >
                    <i className="fas fa-thumbs-down" />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="Start chat!"
                  placement="bottom"
                  TransitionComponent={Zoom}
                >
                  <Link to={`/chat/${id}`}>
                    <IconButton>
                      <i className="far fa-comments" />
                    </IconButton>
                  </Link>
                </Tooltip>
              </div>
            </div>
          </div>
        </AuthComponent>
        <div className="col-sm-12  col-md-6">
          {renderProp("User Name", name)}
          {renderProp("Age", getAge(birthday))}
          {renderProp("Gender", GENDERS[gender])}
          {renderProp("Email", email)}
          {renderProp("Interests", categoriesList)}
        </div>
      </div>
      <div className="mt-2">
        <AppBar position="static" color="inherit">
          <Tabs
            className="w-100"
            value={state.value}
            onChange={handleChange}
            variant="fullWidth"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab
              label="Future events"
              icon={
                <IconButton color={state.value === 0 ? "default" : "primary"}>
                  <i className="far fa-calendar-alt" />
                </IconButton>
              }
              component={Link}
              to={`/user/${userId}/FutureEvents`}
            />
            <Tab
              label="Archive events"
              icon={
                <IconButton color={state.value === 1 ? "default" : "primary"}>
                  <i className="fas fa-archive" />
                </IconButton>
              }
              component={Link}
              to={`/user/${userId}/ArchiveEvents`}
            />
            <Tab
              label="Visited events"
              icon={
                <IconButton color={state.value === 2 ? "default" : "primary"}>
                  <i className="fas fa-history" />
                </IconButton>
              }
              component={Link}
              to={`/user/${userId}/VisitedEvents`}
            />
            <Tab
              label="Events to go"
              icon={
                <IconButton color={state.value === 3 ? "default" : "primary"}>
                  <i className="fas fa-map-marker-alt" />
                </IconButton>
              }
              component={Link}
              to={`/user/${userId}/EventsToGo`}
            />
          </Tabs>
        </AppBar>

        <Switch>
          <Route
            exact
            path="/user/:id"
            render={() => <Redirect to={`/user/${userId}/FutureEvents`} />}
          />

          <Route
            path="/user/:id/FutureEvents"
            render={() => (
              <Events
                events={events}
                currentUser={currentUser}
                typeOfEvents={onFuture}
              />
            )}
          />

          <Route
            path="/user/:id/ArchiveEvents"
            render={() => (
              <Events
                events={events}
                currentUser={currentUser}
                typeOfEvents={onPast}
              />
            )}
          />

          <Route
            path="/user/:id/VisitedEvents"
            render={() => (
              <Events
                events={events}
                currentUser={currentUser}
                typeOfEvents={onVisited}
              />
            )}
          />

          <Route
            path="/user/:id/EventsToGo"
            render={() => (
              <Events
                events={events}
                currentUser={currentUser}
                typeOfEvents={onToGo}
              />
            )}
          />
        </Switch>
      </div>
    </>
  );
};

UserProfile.propTypes = {
  profile: PropTypes.object,
  history: PropTypes.object,
  data: PropTypes.object,
  events: PropTypes.object,
  currentUser: PropTypes.string,
  getUser: PropTypes.func,
  setAttitude: PropTypes.func,
  getPastEvents: PropTypes.func,
  getFutureEvents: PropTypes.func,
  getVisitedEvents: PropTypes.func,
  getEventsTogo: PropTypes.func,
  resetUser: PropTypes.func,
};

UserProfile.defaultProps = {
  profile: {},
  history: {},
  data: {},
  events: {},
  currentUser: "",
  getUser: () => {},
  setAttitude: () => {},
  getPastEvents: () => {},
  getFutureEvents: () => {},
  getVisitedEvents: () => {},
  getEventsTogo: () => {},
  resetUser: () => {},
};

export default withRouter(UserProfile);
