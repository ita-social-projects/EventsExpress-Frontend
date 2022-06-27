import React from "react";
import { Link } from "react-router-dom";
import LogoViolet from "../../../assets/icons/LogoViolet.png";
import { LOGO_TITLE } from "../../../constants/labelConstants";
import "./Logo.scss";

const Logo = () => (
  <Link to="/landing" className="logo">
    <img src={LogoViolet} alt="Logo" className="logo__image" />
    <div className="logo__text">
      <span className="logo__textEvents">{" EVENTS"}</span>
      <span className="logo__textExpress">{LOGO_TITLE}</span>
    </div>
  </Link>
);

export default Logo;
