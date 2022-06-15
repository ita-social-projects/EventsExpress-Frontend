import React from "react";
import PropTypes from "prop-types";
import "./SectionHeader.scss";

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
