import React from "react";
import PropTypes from "prop-types";
import Rating from "@material-ui/lab/Rating";
import { YOU_RATE_LABEL } from "../../constants/userConstants";
import { LARGE_SIZE } from "../../constants/imageSizesConstants";

const RatingSetter = ({ myRate, callback }) => {
  return (
    <div>
      {YOU_RATE_LABEL}
      <Rating value={myRate} max={10} size={LARGE_SIZE} onChange={callback} />
    </div>
  );
};

RatingSetter.defaultProps = {
  callback: () => {},
  myRate: 0,
};

RatingSetter.propTypes = {
  callback: PropTypes.func,
  myRate: PropTypes.number,
};

export default RatingSetter;
