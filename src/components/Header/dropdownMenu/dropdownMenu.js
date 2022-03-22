import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Roles from "../../../constants/userRoles";
// TODO import CustomAvatar from "../avatar/custom-avatar";  not desided if we need this element here
import AuthComponent from "../../../security/authComponent";
import headerConstants from "../../../constants/headerConstants";
import ToggleButton from "../../shared/toggleButton/toggleButton";
import "./dropdownMenu.scss";

const { CREATE_EVENT, LOG_OUT, HELP, MY_PROFILE, MY_EVENTS } = headerConstants;

const DroprownMenu = ({ user, hub, logout, addEvent }) => {
  const logoutReset = () => {
    if (hub) {
      hub.stop();
    }
    logout();
  };

  const { id, name } = user.id ? user : {};
  return (
    <AuthComponent>
      <div className="users-info">
        <div className="btn-group">
          <ToggleButton>
            <p className="user-name">{name}</p>
            {/* <CustomAvatar size="small" userId={id} name={name} /> */}
          </ToggleButton>
          <div className="dropdown-menu dropdown-menu-right">
            <AuthComponent rolesMatch={Roles.User}>
              <Link className="removedecorations" to={`/user/${id}`}>
                <button className="dropdown-item" type="button">
                  {MY_EVENTS}
                </button>
              </Link>
            </AuthComponent>
            <AuthComponent rolesMatch={Roles.User}>
              <button
                type="button"
                tabIndex={0}
                className="dropdown-item"
                onClick={addEvent}
                aria-hidden
              >
                {CREATE_EVENT}
              </button>
            </AuthComponent>
            <AuthComponent>
              <Link className="removedecorations" to="/editProfile">
                <button className="dropdown-item" type="button">
                  {MY_PROFILE}
                </button>
              </Link>
            </AuthComponent>
            <button
              className="dropdown-item"
              type="button"
              onClick={logoutReset}
            >
              {LOG_OUT}
            </button>
            <button className="dropdown-item" type="button">
              {HELP}
            </button>
          </div>
        </div>
      </div>
    </AuthComponent>
  );
};

DroprownMenu.defaultProps = {
  user: {},
  addEvent: () => {},
  logout: () => {},
  hub: {},
};

DroprownMenu.propTypes = {
  user: PropTypes.object,
  addEvent: PropTypes.func,
  hub: PropTypes.object,
  logout: PropTypes.func,
};
export default DroprownMenu;
