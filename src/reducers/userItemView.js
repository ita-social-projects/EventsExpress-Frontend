import {
  GET_PROFILE_DATA,
  RESET_USER,
} from "../actions/user/user-item-view-action";

const initialState = {
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_DATA:
      return {
        ...state,
        isError: false,
        data: action.payload,
      };
    case RESET_USER:
      return initialState;
    default:
      return state;
  }
};
export default reducer;
