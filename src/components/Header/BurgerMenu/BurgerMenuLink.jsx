import React from "react";
import PropTypes from "prop-types";
import "./BurgerMenuLink.scss";

const burgerLine = <div className="burger-line"></div>;

const BurgerMenuLink = ({ setIsMobileHeaderOpen }) => (
  <button
    type="button"
    onClick={() => setIsMobileHeaderOpen(true)}
    className="header-burger"
  >
    {burgerLine}
    {burgerLine}
    {burgerLine}
  </button>
);

BurgerMenuLink.propTypes = {
  setIsMobileHeaderOpen: PropTypes.func,
};

BurgerMenuLink.defaultProps = {
  setIsMobileHeaderOpen: () => {},
};

export default BurgerMenuLink;
