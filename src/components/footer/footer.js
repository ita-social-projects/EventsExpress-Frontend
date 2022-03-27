import React from "react";
import { Link } from "react-router-dom";
import Logo from "../shared/Logo/logo";
import "./footer.scss";
import constants from "../../constants/Footer";

const { SUBSCRIBE_US, SUBSCRIBE, CONTACT_US, PHONE_NUMBER } = constants;

const links = [
  { id: 0, name: "Home", path: "/home" },
  { id: 1, name: "Search Event", path: "/events" },
  { id: 2, name: "Create Event", path: "" },
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
    <footer className="custom-footer">
      <div className="custom-footer__logo">
        <Logo />
      </div>
      <div className="links-to-pages">
        {links.map(link => (
          <Link key={link.id} to={link.path} className="nav-link link">
            <i className="link-circle fas fa-circle link-text" />
            {link.name}
          </Link>
        ))}
      </div>
      <div className="custom-footer__subscribe">
        <h4>{SUBSCRIBE_US}</h4>
        <form>
          <input
            type="email"
            value="Paste your email"
            className="custom-footer__subscribe i"
          ></input>
          <button type="submit" className="btn-dark-theme">
            {SUBSCRIBE}
          </button>
        </form>
      </div>
      <div className="social-links">
        <h4>{CONTACT_US}</h4>
        <p>{PHONE_NUMBER}</p>
        <div className="social-links__icons">
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
