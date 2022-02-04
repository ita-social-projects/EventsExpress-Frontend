import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { id: 0, name: "Privacy", path: "/privacy" },
    { id: 1, name: "Terms", path: "/terms" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact us", path: "/contactAdmin" },
  ];

  const socialLinks = [
    { id: 0, icon: "fab fa-facebook-f", link: "https://uk-ua.facebook.com" },
    { id: 1, icon: "fab fa-instagram", link: "https://www.instagram.com" },
    { id: 2, icon: "fab fa-youtube", link: "https://www.instagram.com" },
  ];

  return (
    <footer className="custom-footer">
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
