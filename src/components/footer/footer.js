import React from "react";
import { Link } from "react-router-dom";
import Logo from "../shared/Logo/logo";
import "./footer.scss";


const Footer = () => {
  const links = [
    { id: 0, name: "Home", path: "/home" },
    { id: 1, name: "Search Event", path: "/events" },
    { id: 2, name: "Terms", path: "/terms" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "Contact us", path: "/contactAdmin" },
    
  ];

  const socialLinks = [
    { id: 0, icon: "fab fa-facebook-f", link: "https://uk-ua.facebook.com" },
    { id: 1, icon: "fab fa-instagram", link: "https://www.instagram.com" },
    { id: 2, icon: "fab fa-youtube", link: "https://www.instagram.com" },
  ];

  return (
    <footer className="custom-footer">
      <div className="custom-footer__logo">
      <Logo />
      </div>
      <div className="links-to-pages">
        {links.map(link => (
          <Link key={link.id} to={link.path} className="nav-link link">
            <i className="link-circle fas fa-circle" />
            {link.name}
          </Link>
        ))}
      </div>
      <div className="social-links">
        {socialLinks.map(link => (
          <Link key={link.id} to={link.link} className="nav-link social-link">
            <i className={link.icon} />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
