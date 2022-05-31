import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ABOUT_US, CREATE, ENG, EVENTS } from "../../../constants/Header";
import BurgerMenuLink from "../BurgerMenu/BurgerMenuLink";
import HeaderRightBlock from "../headerRightBlock/headerRightBlock";
import planet from "./icons/planet.png";
import "./HeaderLinks.scss";

const HeaderLinks = ({ setIsMobileHeaderOpen }) => (
  <nav>
    <ul className="header-links-wrapper">
      <li className="header-link-item">
        <Link className="link-wrapper" to="/about">{`${ABOUT_US}`}</Link>
      </li>
      <li className="header-link-item">
        <Link className="link-wrapper" to="/home/events">{`${EVENTS}`}</Link>
      </li>
      <li className="header-link-item">
        <Link className="link-wrapper" to="/#">{`${CREATE}`}</Link>
      </li>
      <li className="header-link-item">
        <Link className="eng-link-wrapper" to="/#">
          <div className="eng-link" to="/#">{`${ENG}`}</div>
          <img className="eng-link-icon" src={planet} alt="" />
        </Link>
      </li>
      <HeaderRightBlock />
      <BurgerMenuLink setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
    </ul>
  </nav>
);

HeaderLinks.propTypes = {
  setIsMobileHeaderOpen: PropTypes.func,
};

HeaderLinks.defaultProps = {
  setIsMobileHeaderOpen: () => {},
};

export default HeaderLinks;
