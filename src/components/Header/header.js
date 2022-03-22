import React from "react";
import { FaStar, FaSearch } from "react-icons/fa";
import ModalWind from "../modal-wind";
import AuthComponent from "../../security/authComponent";
import DropdownMenu from "../../containers/dropdownMenuContainer";
// TODO import CustomAvatar from "../avatar/custom-avatar";  not desided if we need this element here
import Logo from "../shared/Logo/logo";
import ToggleButton from "../shared/toggleButton/toggleButton";
import MenuIcon from "../../assets/icons/header/Menu.png";
import headerConstants from "../../constants/headerConstants";
import "./header.scss";

const { SIGN_IN } = headerConstants;

const Header = user => {
  const { id } = user.id ? user : {};

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
          <DropdownMenu />
        </div>
      </div>
    </nav>
  );
};

export default Header;
