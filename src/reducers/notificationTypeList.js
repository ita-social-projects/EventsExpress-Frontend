import { GET_NOTIFICATION_TYPES_DATA } from "../actions/notificationType/notificationType-list-action";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === GET_NOTIFICATION_TYPES_DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }

  return state;
};

export default reducer;
