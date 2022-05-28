import React from "react";
import PropTypes from "prop-types";
import "./LinkItem.scss";

const LinkItem = ({ href, icon }) => {
  return (
    <a target="_blank" rel="noreferrer" href={href} className="link__icon">
      <i className={`${icon} social__icon`} />
    </a>
  );
};

LinkItem.defaultProps = {
  href: "",
  icon: "",
};

LinkItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
};
export default LinkItem;
