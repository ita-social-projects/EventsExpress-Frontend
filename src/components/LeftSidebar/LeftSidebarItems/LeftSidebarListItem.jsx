import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Badge from "@material-ui/core/Badge";

const LeftSidebarListItem = ({
  link,
  faviconIconClass,
  pageName,
  handleSidebarToggle,
  badgeContent,
}) => {
  return (
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
};

LeftSidebarListItem.defaultProps = {
  link: "",
  faviconIconClass: "",
  pageName: "",
  handleSidebarToggle: () => {},
  badgeContent: 0,
};

LeftSidebarListItem.propTypes = {
  link: PropTypes.string,
  faviconIconClass: PropTypes.string,
  pageName: PropTypes.string,
  handleSidebarToggle: PropTypes.func,
  badgeContent: PropTypes.number,
};

export default LeftSidebarListItem;
