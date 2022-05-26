import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import "./AttitudeToolTip.scss";

const AttitudeToolTip = ({ message, thumb }) => {
  return (
    <Tooltip title={message} placement="bottom" TransitionComponent={Zoom}>
      <div className="retreat">
        <i className={`far ${thumb} thumb_size thumb_bg`} />
      </div>
    </Tooltip>
  );
};

AttitudeToolTip.propTypes = {
  message: PropTypes.string,
  thumb: PropTypes.string,
};
AttitudeToolTip.defaultProps = {
  message: "",
  thumb: null,
};

export default AttitudeToolTip;
