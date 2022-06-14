import React from "react";
import PropTypes from "prop-types";
import {ENUM_LOCATION_TYPE} from "../../../constants/eventConstants";
import DisplayMap from "./DisplayMap";
import DisplayOnline from "./DisplayOnline";

const DisplayLocation = ({ location }) => {
  if (location && location?.type === ENUM_LOCATION_TYPE.MAP) {
    return <DisplayMap location={location} />;
  }
  if (location?.type === ENUM_LOCATION_TYPE.ONLINE) {
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
