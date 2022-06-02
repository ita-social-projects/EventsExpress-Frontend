import React from "react";
import PropTypes from "prop-types";
import enumLocationType from "../../../constants/EventLocationType";
import DisplayMap from "./DisplayMap";
import DisplayOnline from "./DisplayOnline";

const DisplayLocation = ({ location }) => {
  if (location && location?.type === enumLocationType.map) {
    return <DisplayMap location={location} />;
  }
  if (location?.type === enumLocationType.online) {
    return <DisplayOnline locationPath={location?.onlineMeeting} />;
  }

  return null;
};

DisplayLocation.propTypes = {
  location: PropTypes.object,
};

DisplayLocation.defaultProps = {
  location: {},
};

export default DisplayLocation;
