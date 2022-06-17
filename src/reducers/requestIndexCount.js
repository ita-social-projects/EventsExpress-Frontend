import { REQUEST_INC, REQUEST_DEC } from "../actions/request-count-action";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_INC:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case REQUEST_DEC:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
export default reducer;
