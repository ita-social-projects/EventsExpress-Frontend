import initialState from "../store/initialState";
import {
  GET_EVENT_SCHEDULE_DATA,
  RESET_EVENT_SCHEDULE,
} from "../actions/eventSchedule/eventSchedule-item-view-action";

const reducer = (state = initialState.eventSchedule, action) => {
  switch (action.type) {
    case GET_EVENT_SCHEDULE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case RESET_EVENT_SCHEDULE:
      return {
        ...initialState.eventSchedule,
      };
    default:
      return state;
  }
};

export default reducer;
