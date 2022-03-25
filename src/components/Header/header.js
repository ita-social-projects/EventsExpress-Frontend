import React from "react";
import Logo from "../shared/Logo/logo";
import HeaderRightBlock from "./headerRightBlock/headerRightBlock";
import MenuIcon from "../../assets/icons/header/Menu.png";
import "./header.scss";

const Header = () => {
  return (
    <nav className="header">
      <button type="button" tabIndex={0} className="header__menu">
        <img src={MenuIcon} alt="Menu" />
      </button>
      <Logo />
      <HeaderRightBlock />
    </nav>
  );
};

export default Header;
