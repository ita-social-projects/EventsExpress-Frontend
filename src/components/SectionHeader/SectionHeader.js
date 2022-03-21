import React from "react";
// import "SectionHeader.scss";
import PropTypes from "prop-types";

const SectionHeader = ({ title }) => (
  <h3 className="section__header">{title}</h3>
);

SectionHeader.defaultProps = {
  title: "",
};

SectionHeader.propTypes = {
  title: PropTypes.string,
};

export default SectionHeader;
