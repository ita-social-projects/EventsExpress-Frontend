import React from "react";
import PropTypes from "prop-types";

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
          Online meeting here
        </a>
      </div>
    );
  }
  
  DisplayOnline.propTypes = {
    locationPath: PropTypes.oneOf(PropTypes.obkect, PropTypes.array),
  }
  
  DisplayOnline.defaultProps = {
    locationPath: {},
  }

export default DisplayOnline;
