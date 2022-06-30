import initialState from "../store/initialState";
import { REQUEST_INC, REQUEST_DEC } from "../actions/request-count-action";
import { DECREMENT, INCREMENT } from "../constants/numberConstants";

const reducer = (state = initialState.requestCount, action) => {
  switch (action.type) {
    case REQUEST_INC:
      return {
        ...state,
        counter: state.counter + INCREMENT,
      };
    case REQUEST_DEC:
      return {
        ...state,
        counter: state.counter - DECREMENT,
      };
    default:
      return state;
  }
};
export default reducer;
