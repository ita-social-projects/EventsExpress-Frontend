/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import EventIcon from "@material-ui/icons/Event";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FeedbackIcon from "@material-ui/icons/Feedback";
import Roles from "../../../constants/userRolesConstants";
import AuthComponent from "../../../security/authComponent";
import headerConstants from "../../../constants/headerConstants";
import ToggleButton from "../../shared/toggleButton/toggleButton";
import "./dropdownMenu.scss";

const { CREATE_EVENT, LOG_OUT, FEEDBACK, MY_PROFILE, MY_EVENTS } =
  headerConstants;

const DropDownItem = ({ link, className, icon, title, callback }) =>
  callback ? (
    <button className="dropdown-item" type="button" onClick={callback}>
      {icon}
      {title}
    </button>
  ) : (
    <Link className={`dropdown-item ${className}`} to={link}>
      {icon}
      {title}
    </Link>
  );

const DropdownMenu = ({ user, hub, logout, addEvent }) => {
  const logoutReset = () => {
    if (hub) {
      hub.stop();
    }
    logout();
  };

  const { id } = user.id ? user : {};
  
  const DROP_DOWN_ITEMS_MAPPER = [
    {
      link: `/user/${id}`,
      icon: <EventIcon />,
      title: MY_EVENTS,
    },
    {
      icon: <AddCircleOutlineIcon />,
      title: CREATE_EVENT,
      callback: addEvent,
    },
    {
      link: '/editProfile',
      icon: <AccountCircleIcon />,
      title: MY_PROFILE,
    },
    {
      callback: logoutReset,
      icon: <ExitToAppIcon />,
      title: LOG_OUT,
    },
    {
      icon: <FeedbackIcon />,
      title: FEEDBACK,
      link: '',
    },
  ]
  return (
    <AuthComponent rolesMatch={Roles.User}>
      <div className="users-info">
        <div className="btn-group">
          <ToggleButton>
            <p className="user-name">{user.name}</p>
          </ToggleButton>
          <div className="dropdown-menu dropdown-menu-right">
            {DROP_DOWN_ITEMS_MAPPER.map(item => <DropDownItem key={item.title} {...item} />)}
          </div>
        </div>
      </div>
    </AuthComponent>
  );
};

DropdownMenu.defaultProps = {
  user: {},
  addEvent: () => {},
  logout: () => {},
  hub: {},
};

DropdownMenu.propTypes = {
  user: PropTypes.object,
  addEvent: PropTypes.func,
  hub: PropTypes.object,
  logout: PropTypes.func,
};
export default DropdownMenu;
