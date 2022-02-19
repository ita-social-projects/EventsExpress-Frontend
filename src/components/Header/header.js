import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ModalWind from "../modal-wind";
import AuthComponent from "../../security/authComponent";
import "./header.scss";
import CustomAvatar from "../avatar/custom-avatar";
import Roles from "../../constants/userRoles";
import Logo from "../../assets/icons/LogoViolet.png";
import SerchIcon from "../../assets/icons/header/Search.png";
import SavedIcon from "../../assets/icons/header/Saved.png";
import MenuIcon from "../../assets/icons/header/Menu.png";
import LanguageSwich from "../../assets/icons/header/Language.png";
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
      <div className="header__menu">
        <img src={MenuIcon} alt="Menu" />
      </div>

      <Link to="/home" className="logo">
        <img src={Logo} alt="Logo" className="logo__image" />
        <div className="logo__text">
          <span className="logo__textEvent"> EVENTS</span>
          <span className="logo__textExpress">EXPRESS</span>
        </div>
      </Link>

      <div className="header__right-block">
        <AuthComponent rolesMatch={Roles.User}>
          <div
            role="button"
            tabIndex={0}
            className="btn-light-theme"
            onClick={addEvent}
            aria-hidden
          >
            {CREATE_EVENT}
          </div>
        </AuthComponent>

        <AuthComponent onlyAnonymous>
          <div className="header__right-block">
            <div className="header-icons">
              <img
                src={LanguageSwich}
                alt="EN"
                className="header-icons__item"
              />
              <img
                src={SerchIcon}
                alt="Search"
                className="header-icons__item"
              />
              <img src={SavedIcon} alt="Saved" className="header-icons__item" />
            </div>
            {!id && (
              <ModalWind
                renderButton={action => (
                  <div
                    role="button"
                    tabIndex={0}
                    className="btn-light-theme"
                    variant="contained"
                    onClick={action}
                    aria-hidden
                  >
                    {SIGN_IN}
                  </div>
                )}
              />
            )}
          </div>
        </AuthComponent>

        <AuthComponent>
          <div className="users-info">
            <div className="btn-group">
              <div
                type="button"
                className="dropdown-toggle d-flex flex-row alignItemsCenter"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <p className="userNameAlign">{name}</p>
                <CustomAvatar size="small" userId={id} name={name} />
              </div>
              <div className="dropdown-menu dropdown-menu-right bgcolorwhite">
                <AuthComponent rolesMatch={Roles.User}>
                  <Link className="removedecorations" to={`/user/${id}`}>
                    <button
                      className="dropdown-item bgcolorwhite"
                      type="button"
                    >
                      {MY_EVENTS}
                    </button>
                  </Link>
                </AuthComponent>
                <AuthComponent>
                  <Link className="removedecorations" to="/editProfile">
                    <button
                      className="dropdown-item bgcolorwhite"
                      type="button"
                    >
                      {MY_PROFILE}
                    </button>
                  </Link>
                </AuthComponent>
                <button
                  className="dropdown-item bgcolorwhite"
                  type="button"
                  onClick={logoutReset}
                >
                  {LOG_OUT}
                </button>
                <button className="dropdown-item bgcolorwhite" type="button">
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
