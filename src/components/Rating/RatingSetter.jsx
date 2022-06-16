import React from "react";
import PropTypes from "prop-types";
import Rating from "@material-ui/lab/Rating";

const RatingSetter = ({ myRate, callback }) => {
  return (
    <div>
      Your rate:
      <Rating
        value={Number(myRate)}
        max={10}
        size="large"
        onChange={callback}
      />
    </div>
  );
};

RatingSetter.defaultProps = {
  callback: () => {},
  myRate: "",
};

RatingSetter.propTypes = {
  callback: PropTypes.func,
  myRate: PropTypes.string,
};

export default RatingSetter;
