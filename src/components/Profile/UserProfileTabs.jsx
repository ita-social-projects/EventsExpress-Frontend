/* eslint-disable no-magic-numbers */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { USER_PROFILE_TABS } from "../../constants/userConstants";
import indexToTabName from "../../constants/indexToTabNameConstants";
import { EVENT_TYPE } from "../../constants/eventConstants";

const splitPath = path => {
  const n = path.toLowerCase().split("/");
  return n[n.length - 1];
};

const UserProfileTabs = ({ getEventsByType, userId, history }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const EVENT_NUM = {
    FUTURE: 0,
    PAST: 1,
    VISITED: 2,
    TODO: 3,
  };
  useEffect(() => {
    setSelectedTab(indexToTabName[splitPath(history.location.pathname)]);
  }, [selectedTab]);

  const handleChange = (event, value) => {
    setSelectedTab(value);
    switch (value) {
      case EVENT_NUM.FUTURE:
        getEventsByType(userId, 1, EVENT_TYPE.FUTURE_EVENTS);
        break;
      case EVENT_NUM.PAST:
        getEventsByType(userId, 1, EVENT_TYPE.PAST_EVENTS);
        break;
      case EVENT_NUM.VISITED:
        getEventsByType(userId, 1, EVENT_TYPE.VISITED_EVENTS);
        break;
      case EVENT_NUM.TODO:
        getEventsByType(userId, 1, EVENT_TYPE.TODO_EVENTS);
        break;
      default:
        setSelectedTab(value);
    }
  };

  return (
    <AppBar position="static" color="inherit">
      <Tabs
        className="w-100"
        value={selectedTab}
        onChange={handleChange}
        variant="fullWidth"
        scrollButtons="on"
        indicatorColor="primary"
        textColor="primary"
      >
        {USER_PROFILE_TABS.map(({ idTab, label, icon, path }) => (
          <Tab
            key={`${label}-${path}`}
            label={label}
            icon={
              <IconButton color={selectedTab === idTab ? "default" : "primary"}>
                {icon}
              </IconButton>
            }
            component={Link}
            to={`/user/${userId}/${path}`}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};

UserProfileTabs.propTypes = {
  history: PropTypes.object,
  getEventsByType: PropTypes.func,
  userId: PropTypes.string,
};

UserProfileTabs.defaultProps = {
  history: null,
  getEventsByType: () => {},
  userId: "",
};

export default UserProfileTabs;
