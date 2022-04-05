import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdSend } from "react-icons/io";
import LogoWhite from "../../assets/icons/LogoWhite.png";
import "./footer.scss";
import FOOTER from "../../constants/Footer";

const {
  SUBSCRIBE_US,
  CONTACT_US,
  PHONE_NUMBER,
  PASTE_YOUR_EMAIL,
  HOME,
  CREATE_EVENT,
  SEARCH_EVENT,
  TERMS,
  ABOUT,
  STYLE_ICON_FACEBOOK,
  STYLE_ICON_INSTAGRAM,
  STYLE_ICON_YOUTUBE,
  PATH_HOME,
  PATH_EVENTS,
  PATH_CREATE_EVENT,
  PATH_TERMS,
  PATH_ABOUT,
  LINK_FACEBOOK,
  LINK_INSTAGRAM,
  LINK_YOUTUBE,
} = FOOTER;

const LiNKS = [
  { path: PATH_HOME, name: HOME },
  { path: PATH_EVENTS, name: SEARCH_EVENT },
  { path: PATH_CREATE_EVENT, name: CREATE_EVENT },
  { path: PATH_TERMS, name: TERMS },
  { path: PATH_ABOUT, name: ABOUT },
];

const SOCIALLINKS = [
  { icon: STYLE_ICON_FACEBOOK, link: LINK_FACEBOOK },
  { icon: STYLE_ICON_INSTAGRAM, link: LINK_INSTAGRAM },
  { icon: STYLE_ICON_YOUTUBE, link: LINK_YOUTUBE },
];

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__links_container">
        <NavLink to={HOME}>
          <img src={LogoWhite} alt="Logo" className="footer__logo" />
        </NavLink>
        <div className="footer__links">
          {LiNKS.map(({ path, name }) => (
            <NavLink to={path} key={name} className="footer__link_item">
              {name}
            </NavLink>
          ))}
        </div>
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
        <div className="footer__social_links_icons">
          {SOCIALLINKS.map(({ link, icon }) => (
            <NavLink to={link} key={link} className="nav-link social-link">
              <i className={icon} />
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
