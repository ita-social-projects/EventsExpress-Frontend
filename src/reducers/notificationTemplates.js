import { GET_TEMPLATES_SUCCESS } from "../actions/notification-templates";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === GET_TEMPLATES_SUCCESS) {
    return {
      data: [...action.payload],
    };
  }

  return state;
};

export default reducer;
