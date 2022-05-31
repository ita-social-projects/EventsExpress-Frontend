import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  ABOUT_US,
  CREATE,
  ENG,
  EVENTS,
  LOGIN,
} from "../../../constants/Header";
import "./MobileHeaderLinks.scss";

const MobileHeaderLinks = ({ setIsMobileHeaderOpen }) => {
  const countOfPixelsForTabletBrainpoint = 768;

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
          <Link to="/about">
            <div className="link-wrapper">{`${ABOUT_US}`}</div>
          </Link>
          <Link to="/home/events">
            <div className="link-wrapper">{`${EVENTS}`}</div>
          </Link>
          <Link to="/#">
            <div className="link-wrapper">{`${CREATE}`}</div>
          </Link>
          <Link to="/#">
            <div className="link-wrapper" to="/#">{`${ENG}`}</div>
          </Link>
          <Link to="/#">
            <div className="link-wrapper" to="/#">{`${LOGIN}`}</div>
          </Link>
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
