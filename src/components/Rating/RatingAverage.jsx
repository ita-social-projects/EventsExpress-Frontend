import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import { SMALL_SIZE } from "../../constants/imageSizesConstants";
import getRatingEffect from "../helpers/ratingHelper";
import "./Rating.scss";

const RatingAverage = ({ value, direction }) => {
  const ratingEffect = getRatingEffect(value);
  const displayStyle = direction === "row" ? "rating_average" : "rating_box";

  return (
    <div className={displayStyle}>
      <IconButton className={ratingEffect} size={SMALL_SIZE} disabled>
        <i className="far fa-star" />
      </IconButton>
      <div className={ratingEffect}>{value.toFixed(1)}</div>
    </div>
  );
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
