import React from "react";
import PropTypes from "prop-types";
import SearchUsers from "../../components/SearchUsers/SearchUsers";

const UsersSearchContainer = ({ location }) => (
  <SearchUsers params={location.search} />
);

UsersSearchContainer.defaultProps = {
  location: {},
};
UsersSearchContainer.propTypes = {
  location: PropTypes.object,
};
export default UsersSearchContainer;
