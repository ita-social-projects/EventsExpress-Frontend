import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaStar, FaSearch } from "react-icons/fa";
import ModalWind from "../modal-wind";
import AuthComponent from "../../security/authComponent";
import "./header.scss";
// TODO import CustomAvatar from "../avatar/custom-avatar";  not desided if we need this element here
import Roles from "../../constants/userRoles";
import Logo from "../shared/Logo/logo";
import ToggleButton from "../shared/toggleButton/toggleButton";
import MenuIcon from "../../assets/icons/header/Menu.png";
import headerConstants from "../../constants/headerConstants";

const { CREATE_EVENT, SIGN_IN, LOG_OUT, HELP, MY_PROFILE, MY_EVENTS } =
  headerConstants;

const Header = ({ user, hub, logout, addEvent }) => {
  const logoutReset = () => {
    if (hub) {
      hub.stop();
    }
    logout();
  };

  const { id, name } = user.id ? user : {};

  return (
    <nav className="header">
      <div role="button" tabIndex={0} className="header__menu">
        <img src={MenuIcon} alt="EN" className="language-toggle__icon" />
      </div>
      <Logo />
      <div className="header__right-block">
        <div className="header-icons">
          <div className="language-toggle">
            <span className="language-toggle__icon">EN </span>
            <ToggleButton />
          </div>
          <FaSearch className="header-icons__item" />
          <FaStar className="header-icons__item" />
        </div>
        <div>
          {!id && (
            <AuthComponent onlyAnonymous>
              <ModalWind
                renderButton={action => (
                  <div
                    role="button"
                    tabIndex={0}
                    className="btn-light-theme"
                    onClick={action}
                    aria-hidden
                  >
                    {SIGN_IN}
                  </div>
                )}
              />
            </AuthComponent>
          )}
        </div>
        <AuthComponent>
          <div className="users-info">
            <div className="btn-group">
              <button
                type="button"
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <p className="user-name">{name}</p>
                {/* <CustomAvatar size="small" userId={id} name={name} /> */}
              </button>
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
      </div>
    </nav>
  );
};

Header.defaultProps = {
  user: {},
  addEvent: () => {},
  logout: () => {},
  hub: {},
};

Header.propTypes = {
  user: PropTypes.object,
  addEvent: PropTypes.func,
  hub: PropTypes.object,
  logout: PropTypes.func,
};

export default Header;
