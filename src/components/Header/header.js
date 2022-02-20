import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ModalWind from "../modal-wind";
import AuthComponent from "../../security/authComponent";
import "./header.scss";
// import CustomAvatar from "../avatar/custom-avatar"; not desided if we need this element here
import Roles from "../../constants/userRoles";
import Logo from "../../assets/icons/LogoViolet.png";
import SerchIcon from "../../assets/icons/header/Search.png";
import SavedIcon from "../../assets/icons/header/Saved.png";
import MenuIcon from "../../assets/icons/header/Menu.png";
import Language from "../../assets/icons/header/Language.png";
import constants from "../../constants/headerConstants";

const { CREATE_EVENT, SIGN_IN, LOG_OUT, HELP, MY_PROFILE, MY_EVENTS } =
  constants;

function Header({ user, hub, logout, addEvent }) {
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
        <img src={MenuIcon} alt="Menu" />
      </div>

      <Link to="/home" className="logo">
        <img src={Logo} alt="Logo" className="logo__image" />
        <div className="logo__text">
          <span className="logo__textEvents"> EVENTS</span>
          <span className="logo__textExpress">EXPRESS</span>
        </div>
      </Link>
      <div className="header__right-block">
        <div className="header-icons">
          <div className="language-toggle">
            <img src={Language} alt="EN" className="language-toggle__icon" />
            <div
              type="button"
              className="dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></div>
          </div>

          <img src={SerchIcon} alt="Search" className="header-icons__item" />
          <img src={SavedIcon} alt="Saved" className="header-icons__item" />
        </div>

        <AuthComponent onlyAnonymous>
          {!id && (
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
          )}
        </AuthComponent>

        <AuthComponent>
          <div className="users-info">
            <div className="btn-group">
              <div
                type="button"
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <p className="user-name">{name}</p>
                {/* <CustomAvatar size="small" userId={id} name={name} /> */}
              </div>
              <div className="dropdown-menu dropdown-menu-right">
                <AuthComponent rolesMatch={Roles.User}>
                  <Link className="removedecorations" to={`/user/${id}`}>
                    <button className="dropdown-item" type="button">
                      {MY_EVENTS}
                    </button>
                  </Link>
                </AuthComponent>
                <AuthComponent rolesMatch={Roles.User}>
                  <div
                    role="button"
                    tabIndex={0}
                    className="dropdown-item"
                    onClick={addEvent}
                    aria-hidden
                  >
                    {CREATE_EVENT}
                  </div>
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
}

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
