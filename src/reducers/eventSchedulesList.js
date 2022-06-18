import {
  GET_EVENTS_SCHEDULE_DATA,
  RESET_EVENTS_SCHEDULE,
} from "../actions/eventSchedule/eventScheduleActionTypes";

const initialState = {
  data: {
    items: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_SCHEDULE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case RESET_EVENTS_SCHEDULE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
