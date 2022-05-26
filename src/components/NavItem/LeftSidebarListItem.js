import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LeftSidebarListItem = ({
  link,
  faviconIconClass,
  pageName,
  handleItemSelect,
}) => {
  return (
    <li className="left-sidebar__item">
      <Link className="left-sidebar__link" to={link} onClick={handleItemSelect}>
        <i className={`${faviconIconClass} item__icon`} />
        <span className="item__page-name">{pageName}</span>
      </Link>
    </li>
  );
};

LeftSidebarListItem.defaultProps = {
  link: "",
  faviconIconClass: "",
  pageName: "",
  handleItemSelect: () => {},
};

LeftSidebarListItem.propTypes = {
  link: PropTypes.string,
  faviconIconClass: PropTypes.string,
  pageName: PropTypes.string,
  handleItemSelect: PropTypes.func,
};

export default LeftSidebarListItem;
