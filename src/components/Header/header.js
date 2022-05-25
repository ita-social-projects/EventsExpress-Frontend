import React, { useState } from "react";
import Logo from "../shared/Logo/logo";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import MobileHeaderLinks from "./MobileHeaderLinks/MobileHeaderLinks";
import "./header.scss";

const Header = () => {
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);

  return (
    <nav className="header">
      <Logo />
      {isMobileHeaderOpen ? (
        <MobileHeaderLinks setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
      ) : (
        <HeaderLinks
          setIsMobileHeaderOpen={setIsMobileHeaderOpen}
          isMobileHeaderOpen={isMobileHeaderOpen}
        />
      )}
    </nav>
  );
};

export default Header;
