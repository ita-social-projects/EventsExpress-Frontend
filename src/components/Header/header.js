import React, { useState } from "react";
import Logo from "../shared/Logo/logo";
import "./header.scss";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import MobileHeaderLinks from "./MobileHeaderLinks/MobileHeaderLinks";

const Header = () => {
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);
  return (
    <nav className="header">
      <Logo />
      {isMobileHeaderOpen ? (
        <MobileHeaderLinks />
      ) : (
        <HeaderLinks setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
      )}
    </nav>
  );
};

export default Header;
