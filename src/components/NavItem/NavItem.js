import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavItem = ({ to, icon, text, myIcon }) => {
  return (
    <li className="sidebar-header">
      <Link to={to} className="active">
        <span className="link">
          <i className={`${icon} nav-item-icon`} />
          {myIcon}
          <span className="nav-item-text">&nbsp;{text}</span>
          <strong></strong>
        </span>
      </Link>
    </li>
  );
};

NavItem.defaultProps = {
  icon: "",
  text: "",
  to: "",
  myIcon: <></>,
};

NavItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string,
  myIcon: PropTypes.element,
};

export default NavItem;
