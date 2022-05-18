import React from "react";
import Logo from "../shared/Logo/logo";
import "./header.scss";
import HeaderLinks from "./HeaderLinks/HeaderLinks";

const Header = () => {
  return (
    <nav className="header">
      <Logo />
      <HeaderLinks />
    </nav>
  );
};

export default Header;
