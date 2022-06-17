import {
  REQUEST_LOCAL_INC,
  REQUEST_LOCAL_DEC,
} from "../actions/request-local-count-action";

const initialState = {
  localCounter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOCAL_INC:
      return {
        ...state,
        localCounter: state.localCounter + 1,
      };
    case REQUEST_LOCAL_DEC:
      return {
        ...state,
        localCounter: state.localCounter - 1,
      };
    default:
      return state;
  }
};

export default reducer;
