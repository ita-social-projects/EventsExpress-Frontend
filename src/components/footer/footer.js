import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdSend } from "react-icons/io";
import LogoWhite from "../../assets/icons/LogoWhite.png";
import "./footer.scss";
import { FOOTER_LABELS } from "../../constants/footerConstants";
import { SOCIAL_NAV_LINKS, NAV_LINKS } from "./footer-mapper";

const { SUBSCRIBE_US, CONTACT_US, PHONE_NUMBER, PASTE_YOUR_EMAIL, HOME } =
  FOOTER_LABELS;

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__links_container">
        <NavLink to={HOME}>
          <img src={LogoWhite} alt="Logo" className="footer__logo" />
        </NavLink>
        <div className="footer__links">{NAV_LINKS}</div>
      </div>
      <div className="footer__subscribe">
        <h4>{SUBSCRIBE_US}</h4>
        <form className="footer__form">
          <input
            type="email"
            placeholder={PASTE_YOUR_EMAIL}
            className="footer__input"
          />
          <IoMdSend className="footer__subscribe__icon" />
        </form>
      </div>
      <div className="footer__social_links">
        <h4>{CONTACT_US}</h4>
        <p>{PHONE_NUMBER}</p>
        <div className="footer__social_links_icons">{SOCIAL_NAV_LINKS}</div>
      </div>
    </footer>
  );
};

export default Footer;
