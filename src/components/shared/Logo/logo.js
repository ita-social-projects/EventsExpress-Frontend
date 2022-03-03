import React from "react";
import { Link } from "react-router-dom";
import LogoViolet from "../../../assets/icons/LogoViolet.png";
import "./logo.scss";

const Logo = () => {
  return (
    <Link to="/home" className="logo">
      <img src={LogoViolet} alt="Logo" className="logo__image" />
      <div className="logo__text">
        <span className="logo__textEvents"> EVENTS</span>
        <span className="logo__textExpress">EXPRESS</span>
      </div>
    </Link>
  );
};

export default Logo;
