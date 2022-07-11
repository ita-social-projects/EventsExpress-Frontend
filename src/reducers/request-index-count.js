import initialState from "../store/initialState";
import { REQUEST_INC, REQUEST_DEC } from "../actions/request-count-action";

const COUNT_STEP = 1;

const reducer = (state = initialState.requestCount, action) => {
  switch (action.type) {
    case REQUEST_INC:
      return {
        ...state,
        counter: state.counter + COUNT_STEP,
      };
    case REQUEST_DEC:
      return {
        ...state,
        counter: state.counter - COUNT_STEP,
      };
    default:
      return state;
  }
};
export default reducer;
