import React from "react";
import PropTypes from "prop-types";
import enumLocationType from "../../../constants/EventLocationType";
import DisplayMap from "./display-map";
import DisplayOnline from "./display-online";

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
  location: PropTypes.oneOfType(PropTypes.array, PropTypes.object),
};

DisplayLocation.defaultProps = {
  location: {},
};

export default DisplayLocation;
