import React from "react";
import PropTypes from "prop-types";
import LeftSidebarListItem from "./LeftSidebarListItem";

const LeftSidebarItems = ({ items, handleSidebarToggle }) => (
  <>
    {items.map(item => (
      <LeftSidebarListItem
        key={item.pageName}
        handleSidebarToggle={handleSidebarToggle}
        {...item}
      />
    ))}
  </>
);

LeftSidebarItems.defaultProps = {
  items: [],
  handleSidebarToggle: () => {},
};

LeftSidebarItems.propTypes = {
  handleSidebarToggle: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      faviconIconClass: PropTypes.string.isRequired,
      pageName: PropTypes.string.isRequired,
    }),
  ),
};

export default LeftSidebarItems;
