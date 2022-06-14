import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setRating,
  getCurrrentRating,
  getAverageRating,
} from "../../actions/rating-action";
import RatingAverage from "../../components/Rating/RatingAverage";
import RatingSetter from "../../components/Rating/RatingSetter";

class RatingContainer extends Component {
  componentDidMount = () => {
    this.props.getMyRate();
    this.props.getAverageRate();
  };

  onRateChange = event => {
    const rate = event.currentTarget.value;
    this.props.setRate(rate).then(this.props.getAverageRate);
  };

  render() {
    return (
      <div className="d-flex flex-row align-items-center justify-content-between">
        {this.props.iWillVisitIt ? (
          <RatingSetter
            myRate={this.props.myRate}
            callback={this.onRateChange}
          />
        ) : (
          <div></div>
        )}

        <RatingAverage value={this.props.averageRate} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myRate: state.event.myRate,
  averageRate: state.event.averageRate,
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    setRate: value =>
      dispatch(
        setRating({
          eventId: props.eventId,
          userId: props.userId,
          rate: value,
        }),
      ),
    getMyRate: () => dispatch(getCurrrentRating(props.eventId)),
    getAverageRate: () => dispatch(getAverageRating(props.eventId)),
  };
};

RatingContainer.propTypes = {
  setRate: PropTypes.func,
  myRate: PropTypes.number,
  getMyRate: PropTypes.func,
  getAverageRate: PropTypes.func,
  iWillVisitIt: PropTypes.array,
  averageRate: PropTypes.object,
};
RatingContainer.defaultProps = {
  setRate: () => {},
  myRate: null,
  getMyRate: () => {},
  getAverageRate: () => {},
  averageRate: {},
  iWillVisitIt: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingContainer);
