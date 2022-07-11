import initialState from "../store/initialState";
import {
  REQUEST_LOCAL_INC,
  REQUEST_LOCAL_DEC,
} from "../actions/request-local-count-action";

const COUNT_STEP = 1;

const reducer = (state = initialState.requestLocalCount, action) => {
  switch (action.type) {
    case REQUEST_LOCAL_INC:
      return {
        ...state,
        localCounter: state.localCounter + COUNT_STEP,
      };
    case REQUEST_LOCAL_DEC:
      return {
        ...state,
        localCounter: state.localCounter - COUNT_STEP,
      };
    default:
      return state;
  }
};

export default reducer;
