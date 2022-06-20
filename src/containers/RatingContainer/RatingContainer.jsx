import { connect } from "react-redux";
import Rating from "../../components/Rating/Rating";
import {
  setRating,
  getCurrrentRating,
  getAverageRating,
} from "../../actions/rating-action";

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
export default connect(mapStateToProps, mapDispatchToProps)(Rating);
