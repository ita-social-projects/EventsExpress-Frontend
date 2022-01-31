import React from "react";
import PropTypes from "prop-types";
import SearchUsers from "./SearchUsers";

const UsersPWrapper = ({ location }) => (
  <SearchUsers params={location.search} />
);

UsersPWrapper.defaultProps = {
  location: {},
};
UsersPWrapper.propTypes = {
  location: PropTypes.object,
};
export default UsersPWrapper;
