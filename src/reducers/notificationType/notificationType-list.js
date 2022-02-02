import initialState from "../../store/initialState";
import { GET_NOTIFICATION_TYPES_DATA } from "../../actions/notificationType/notificationType-list-action";

const reducer = (state = initialState.notificationTypes, action) => {
  if (action.type === GET_NOTIFICATION_TYPES_DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }

  return state;
};

export default reducer;
