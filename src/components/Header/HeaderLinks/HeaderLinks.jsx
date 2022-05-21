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
import union from "./icons/union.png";
import planet from "./icons/planet.png";
import "./HeaderLinks.scss";

const HeaderLinks = ({ setIsMobileHeaderOpen }) => {
  return (
    <nav>
      <ul className="header-links-wrapper">
        <li>
          <Link className="link-wrapper" to="/about">{`${ABOUT_US}`}</Link>
        </li>
        <li>
          <Link className="link-wrapper" to="/home/events">{`${EVENTS}`}</Link>
        </li>
        <li>
          <Link className="link-wrapper" to="/#">{`${CREATE}`}</Link>
        </li>
        <li>
          <Link className="login-link-wrapper" to="/#">
            <div className="login-link">{`${LOGIN}`}</div>
            <img src={union} alt="" />
          </Link>
        </li>
        <li>
          <Link className="eng-link-wrapper" to="/#">
            <div className="eng-link" to="/#">{`${ENG}`}</div>
            <img src={planet} alt="" />
          </Link>
        </li>
        <button
          type="button"
          onClick={() => setIsMobileHeaderOpen(true)}
          className="header-burger"
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </button>
      </ul>
    </nav>
  );
};

HeaderLinks.propTypes = {
  setIsMobileHeaderOpen: PropTypes.func,
};

HeaderLinks.defaultProps = {
  setIsMobileHeaderOpen: () => {},
};

export default HeaderLinks;
