import React from "react";
import PropTypes from "prop-types";
import "./BurgerMenuLink.scss";

const BurgerMenuLink = ({ setIsMobileHeaderOpen }) => {
  return (
    <button
      type="button"
      onClick={() => setIsMobileHeaderOpen(true)}
      className="header-burger"
    >
      <div className="burger-line"></div>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
    </button>
  );
};

BurgerMenuLink.propTypes = {
  setIsMobileHeaderOpen: PropTypes.func,
};

BurgerMenuLink.defaultProps = {
  setIsMobileHeaderOpen: () => {},
};

export default BurgerMenuLink;
