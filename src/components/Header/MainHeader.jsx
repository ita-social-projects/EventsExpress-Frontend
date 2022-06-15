import React, { useState } from "react";
import Logo from "../shared/Logo/Logo";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import MobileHeaderLinks from "./MobileHeaderLinks/MobileHeaderLinks";
import "./MainHeader.scss";

const Header = () => {
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);

  return (
    <nav className="header">
      <Logo />
      {isMobileHeaderOpen ? (
        <MobileHeaderLinks setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
      ) : (
        <HeaderLinks setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
      )}
    </nav>
  );
};

export default Header;
