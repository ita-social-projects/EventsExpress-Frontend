import initialState from "../store/initialState";
import {
  REQUEST_LOCAL_INC,
  REQUEST_LOCAL_DEC,
} from "../actions/request-local-count-action";
import { DECREMENT, INCREMENT } from "../constants/numberConstants";

const reducer = (state = initialState.requestLocalCount, action) => {
  switch (action.type) {
    case REQUEST_LOCAL_INC:
      return {
        ...state,
        localCounter: state.localCounter + INCREMENT,
      };
    case REQUEST_LOCAL_DEC:
      return {
        ...state,
        localCounter: state.localCounter - DECREMENT,
      };
    default:
      return state;
  }
};

export default reducer;
