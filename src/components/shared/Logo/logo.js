import React from "react";
import LogoViolet from "../../../assets/icons/LogoViolet.png";
import "./logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img src={LogoViolet} alt="Logo" className="logo__image" />
      <div className="logo__text">
        <span className="logo__textEvents"> EVENTS</span>
        <span className="logo__textExpress">EXPRESS</span>
      </div>
    </div>
  );
};

export default Logo;
