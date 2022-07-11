/* eslint-disable no-magic-numbers */
import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route, Switch } from "react-router-dom";
import Events from "./Events";
import { EVENT_TYPE } from "../../constants/eventConstants";

const UserProfileRoutes = ({
  events,
  currentUser,
  userId,
  getEventsByType,
}) => (
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
          typeOfEvents={() =>
            getEventsByType(userId, 1, EVENT_TYPE.FUTURE_EVENTS)
          }
        />
      )}
    />
    <Route
      path="/user/:id/ArchiveEvents"
      render={() => (
        <Events
          events={events}
          currentUser={currentUser}
          typeOfEvents={() =>
            getEventsByType(userId, 1, EVENT_TYPE.PAST_EVENTS)
          }
        />
      )}
    />

    <Route
      path="/user/:id/VisitedEvents"
      render={() => (
        <Events
          events={events}
          currentUser={currentUser}
          typeOfEvents={() =>
            getEventsByType(userId, 1, EVENT_TYPE.VISITED_EVENTS)
          }
        />
      )}
    />

    <Route
      path="/user/:id/EventsToGo"
      render={() => (
        <Events
          events={events}
          currentUser={currentUser}
          typeOfEvents={() =>
            getEventsByType(userId, 1, EVENT_TYPE.TODO_EVENTS)
          }
        />
      )}
    />
  </Switch>
);

UserProfileRoutes.propTypes = {
  events: PropTypes.object,
  currentUser: PropTypes.string,
  userId: PropTypes.string,
  getEventsByType: PropTypes.func,
};

UserProfileRoutes.defaultProps = {
  events: {},
  currentUser: "",
  userId: "",
  getEventsByType: () => {},
};

export default UserProfileRoutes;
