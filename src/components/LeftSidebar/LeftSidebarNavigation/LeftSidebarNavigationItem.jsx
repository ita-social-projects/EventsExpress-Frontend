import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Badge from "@material-ui/core/Badge";

const LeftSidebarNavigationItem = ({
  link,
  faviconIconClass,
  pageName,
  handleSidebarToggle,
  badgeContent,
}) => (
  <li className="left-sidebar__item">
    <NavLink
      activeClassName="active"
      className="left-sidebar__link"
      to={link}
      onClick={handleSidebarToggle}
    >
      <Badge badgeContent={badgeContent} color="secondary">
        <i className={`${faviconIconClass} item__icon`} />
      </Badge>
      <span className="item__page-name">{pageName}</span>
    </NavLink>
  </li>
);

LeftSidebarNavigationItem.defaultProps = {
  link: "",
  faviconIconClass: "",
  pageName: "",
  handleSidebarToggle: () => {},
  badgeContent: 0,
};

LeftSidebarNavigationItem.propTypes = {
  link: PropTypes.string,
  faviconIconClass: PropTypes.string,
  pageName: PropTypes.string,
  handleSidebarToggle: PropTypes.func,
  badgeContent: PropTypes.number,
};

export default LeftSidebarNavigationItem;
