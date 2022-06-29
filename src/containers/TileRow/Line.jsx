import React from "react";
import PropTypes from "prop-types";
import "./Line.scss";
import { TILE_PARAMS } from "../../constants/tileConstants";

// TODO: strange component
const Line = props => {
  const definePath = () => {
    const param = props.index * TILE_PARAMS.DEFAULT;

    const start = `M 0 3`;
    const second = `L ${param + TILE_PARAMS.SECOND} 3`;
    const third = `L ${param + TILE_PARAMS.THIRD} 1`;
    const fourth = `L ${param + TILE_PARAMS.FOURTH} 3`;

    return `${start} ${second} ${third} ${fourth} L 120 3`;
  };

  return (
    <svg className="line" viewBox="0 0 120 5" xmlns="http//www.w3.org/2000/svg">
      <path d={definePath()} strokeLinecap="round" />
    </svg>
  );
};
Line.propTypes = {
  index: PropTypes.number,
};
Line.defaultProps = {
  index: null,
};

export default Line;
