import React from "react";
import { IoMdSend } from "react-icons/io";
import "./footer.scss";
import { FOOTER_LABELS } from "../../constants/footerConstants";
import { SOCIAL_NAV_LINKS } from "./footer-mapper";

const { SUBSCRIBE_US, CONTACT_US, PHONE_NUMBER, PASTE_YOUR_EMAIL } =
  FOOTER_LABELS;

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__inner">
        <div className="footer__head">
          <h1 className="head__text">Life is an event. Make it memorable...</h1>
        </div>
        <div className="footer__interact">
          <div className="footer__contacts">
            <h2>{CONTACT_US}</h2>
            <p>{PHONE_NUMBER}</p>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
