import React from "react";
import PropTypes from "prop-types";
import LeftSidebarNavigationItem from "./LeftSidebarNavigationItem";

const LeftSidebarNavigation = ({ items, handleSidebarToggle }) => (
  <>
    {items.map(item => (
      <LeftSidebarNavigationItem
        key={item.pageName}
        handleSidebarToggle={handleSidebarToggle}
        {...item}
      />
    ))}
  </>
);

LeftSidebarNavigation.defaultProps = {
  items: [],
  handleSidebarToggle: () => {},
};

LeftSidebarNavigation.propTypes = {
  handleSidebarToggle: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      faviconIconClass: PropTypes.string.isRequired,
      pageName: PropTypes.string.isRequired,
    }),
  ),
};

export default LeftSidebarNavigation;
