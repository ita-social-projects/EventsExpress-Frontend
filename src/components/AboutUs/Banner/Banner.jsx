import React from "react";
import { NavLink } from "react-router-dom";
import { BANNER_QUOTE, EVENTS_BTN_TEXT } from "../../../constants/AboutUs";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="about-banner">
      <h1 className="banner-content__quote">{BANNER_QUOTE}</h1>
      <NavLink to="/home/events" className="btn-events">
        {EVENTS_BTN_TEXT}
      </NavLink>
    </div>
  );
};

export default Banner;
