import React, { useEffect } from "react";
import PropTypes from "prop-types";
import RatingAverage from "./RatingAverage";
import RatingSetter from "./RatingSetter";
import "./Rating.scss";

const Rating = ({
  getMyRate,
  getAverageRate,
  setRate,
  averageRate,
  myRate,
  iWillVisitIt,
}) => {
  const rating = Number(myRate);

  useEffect(() => {
    getMyRate();
    getAverageRate();
  }, []);

  const onRateChange = ({ currentTarget }) => {
    setRate(currentTarget.value).then(getAverageRate);
  };

  return (
    <div className="rating_box">
      {iWillVisitIt && <RatingSetter myRate={rating} callback={onRateChange} />}
      <RatingAverage value={averageRate} />
    </div>
  );
};

Rating.propTypes = {
  setRate: PropTypes.func,
  myRate: PropTypes.number,
  getMyRate: PropTypes.func,
  getAverageRate: PropTypes.func,
  iWillVisitIt: PropTypes.array,
  averageRate: PropTypes.object,
};

Rating.defaultProps = {
  setRate: () => {},
  myRate: null,
  getMyRate: () => {},
  getAverageRate: () => {},
  averageRate: {},
  iWillVisitIt: [],
};

export default Rating;
