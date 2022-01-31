import initialState from "../../store/initialState";
import {
  GET_TEMPLATE_PROPERTIES_SUCCESS,
  GET_TEMPLATE_SUCCESS,
} from "../../actions/notification-templates";

const reducer = (state = initialState.notificationTemplate, action) => {
  if (action.type === GET_TEMPLATE_SUCCESS) {
    return {
      ...state,
      ...action.payload,
    };
  }
  if (action.type === GET_TEMPLATE_PROPERTIES_SUCCESS) {
    return {
      ...state,
      availableProperties: action.payload,
    };
  }

  return state;
};

export default reducer;
