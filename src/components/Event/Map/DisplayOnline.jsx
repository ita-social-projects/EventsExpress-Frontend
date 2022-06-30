import React from "react";
import PropTypes from "prop-types";
import { ONLINE_MEETING_HERE } from "../../../constants/eventConstants";

const DisplayOnline = ({ locationPath }) => {
  return (
    <div>
      <a
        style={{
          color: "black",
          textDecoration: "underline",
        }}
        target="_blank"
        href={locationPath}
        rel="noreferrer"
      >
        {ONLINE_MEETING_HERE}
      </a>
    </div>
  );
};

DisplayOnline.propTypes = {
  locationPath: PropTypes.string,
};

DisplayOnline.defaultProps = {
  locationPath: "",
};

export default DisplayOnline;
