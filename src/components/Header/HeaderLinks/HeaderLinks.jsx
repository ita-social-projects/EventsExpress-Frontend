import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ABOUT_US, CREATE, ENG, EVENTS } from "../../../constants/Header";
import BurgerMenuLink from "../BurgerMenu/BurgerMenuLink";
import HeaderRightBlock from "../headerRightBlock/headerRightBlock";
import planet from "./icons/planet.png";
import "./HeaderLinks.scss";

const HeaderLinks = ({ setIsMobileHeaderOpen, isMobileHeaderOpen }) => {
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
          <Link className="eng-link-wrapper" to="/#">
            <div className="eng-link" to="/#">{`${ENG}`}</div>
            <img src={planet} alt="" />
          </Link>
        </li>
        <HeaderRightBlock isMobileHeaderOpen={isMobileHeaderOpen} />
        <BurgerMenuLink setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
      </ul>
    </nav>
  );
};

HeaderLinks.propTypes = {
  setIsMobileHeaderOpen: PropTypes.func,
  isMobileHeaderOpen: PropTypes.any,
};

HeaderLinks.defaultProps = {
  setIsMobileHeaderOpen: () => {},
  isMobileHeaderOpen: PropTypes.any,
};

export default HeaderLinks;
