import React from "react";
import { Link } from "react-router-dom";
import { IoMdSend } from "react-icons/io";
import LogoWhite from "../../assets/icons/LogoWhite.png";
import "./footer.scss";
import constants from "../../constants/Footer";

const { SUBSCRIBE_US, CONTACT_US, PHONE_NUMBER, PASTE_YOUR_EMAIL } = constants;

const links = [
  { id: 0, name: "Home", path: "/home" },
  { id: 1, name: "Search event", path: "/events" },
  { id: 2, name: "Create event", path: "" },
  { id: 3, name: "Terms", path: "/terms" },
  { id: 4, name: "About", path: "/about" },
];

const socialLinks = [
  { id: 0, icon: "fab fa-facebook-f", link: "https://uk-ua.facebook.com" },
  { id: 1, icon: "fab fa-instagram", link: "https://www.instagram.com" },
  { id: 2, icon: "fab fa-youtube", link: "https://www.instagram.com" },
];

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__links_and_logo_container">
        <Link to="/home">
          <img src={LogoWhite} alt="Logo" className="footer__logo" />
        </Link>
        <div className="footer__links_to_pages_container">
          {links.map(link => (
            <Link key={link.id} to={link.path} className="footer__link">
              {link.name}
            </Link>
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
          {socialLinks.map(link => (
            <Link key={link.id} to={link.link} className="nav-link social-link">
              <i className={link.icon} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
