import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import { SMALL_SIZE } from "../../constants/imageSizesConstants";
import getRatingEffect from "../helpers/ratingHelper";
import "./Rating.scss";
import { ROUND_ONE } from "../../constants/numberConstants";

const RatingAverage = ({ value, direction }) => {
  // TODO: check why value is object
  // eslint-disable-next-line no-param-reassign, no-magic-numbers
  if (typeof value === "object") value = 0;
  const ratingEffect = getRatingEffect(value);
  const displayStyle = direction === "row" ? "rating_average" : "rating_box";

  return (
    <div className={displayStyle}>
      <IconButton className={ratingEffect} size={SMALL_SIZE} disabled>
        <i className="far fa-star" />
      </IconButton>
      <div className={ratingEffect}>{value.toFixed(ROUND_ONE)}</div>
    </div>
  );
};

RatingAverage.defaultProps = {
  value: 0,
  direction: "",
};

RatingAverage.propTypes = {
  value: PropTypes.number,
  direction: PropTypes.string,
};

export default RatingAverage;
