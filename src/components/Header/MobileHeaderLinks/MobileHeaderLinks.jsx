import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import HEADER_CONSTS from "../../../constants/headerConstants";
import "./MobileHeaderLinks.scss";

const MobileHeaderLinks = ({ setIsMobileHeaderOpen }) => {
  const countOfPixelsForTabletBrainpoint = 768;
  const headerLinks = [
    HEADER_CONSTS.ABOUT_US,
    HEADER_CONSTS.EVENTS,
    HEADER_CONSTS.CREATE,
    HEADER_CONSTS.ENG,
    HEADER_CONSTS.LOGIN,
  ];
  const headerLinksUlr = ["/about", "/home/events"];

  window.addEventListener("resize", () => {
    if (window.screen.availWidth > countOfPixelsForTabletBrainpoint) {
      setIsMobileHeaderOpen(false);
    }
  });

  return (
    <div
      className="mobile-header-links-wrapperr"
      role="button"
      tabIndex={0}
      onClick={() => setIsMobileHeaderOpen(false)}
      aria-hidden="true"
    >
      <nav>
        <ul>
          {headerLinks.map((link, index) => (
            <Link to={headerLinksUlr[index]} key={1}>
              <div className="link-wrapper">{`${link}`}</div>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

MobileHeaderLinks.propTypes = {
  setIsMobileHeaderOpen: PropTypes.func,
};

MobileHeaderLinks.defaultProps = {
  setIsMobileHeaderOpen: () => {},
};

export default MobileHeaderLinks;
