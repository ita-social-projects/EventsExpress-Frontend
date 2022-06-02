import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import HEADER_CONSTS from "../../../constants/headerConstants";
import BurgerMenuLink from "../BurgerMenu/BurgerMenuLink";
import HeaderRightBlock from "../headerRightBlock/headerRightBlock";
import planet from "./icons/planet.png";
import "./HeaderLinks.scss";

const HeaderLinks = ({ setIsMobileHeaderOpen }) => (
  <nav>
    <ul className="header-links-wrapper">
      <li className="header-link-item">
        <Link
          className="link-wrapper"
          to="/about"
        >{`${HEADER_CONSTS.ABOUT_US}`}</Link>
      </li>
      <li className="header-link-item">
        <Link
          className="link-wrapper"
          to="/home/events"
        >{`${HEADER_CONSTS.EVENTS}`}</Link>
      </li>
      <li className="header-link-item">
        <Link
          className="link-wrapper"
          to="/#"
        >{`${HEADER_CONSTS.CREATE}`}</Link>
      </li>
      <li className="header-link-item">
        <Link className="eng-link-wrapper" to="/#">
          <div className="eng-link" to="/#">{`${HEADER_CONSTS.ENG}`}</div>
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
