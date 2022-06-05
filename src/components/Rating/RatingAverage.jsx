import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";

const RatingAverage = ({ value, direction }) => {
  let textColor = "";
  if (value < 5) {
    textColor = "text-danger";
  } else if (value < 8) {
    textColor = "text-warning";
  } else {
    textColor = "text-success";
  }

  const directionName = direction === "row" ? "flex-row" : "flex-column";

  return value ? (
    <div className={`${directionName} d-flex align-items-center`}>
      <IconButton className={textColor} size="small" disabled>
        <i className="far fa-star" />
      </IconButton>
      <div className={textColor}>{value.toFixed(1)}</div>
    </div>
  ) : null;
};

RatingAverage.defaultProps = {
  value: null,
  direction: "",
};

RatingAverage.propTypes = {
  value: PropTypes.number,
  direction: PropTypes.string,
};

export default RatingAverage;
