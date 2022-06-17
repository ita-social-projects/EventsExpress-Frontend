import {
  GET_EVENT_SCHEDULE_DATA,
  RESET_EVENT_SCHEDULE,
} from "../actions/eventSchedule/eventSchedule-item-view-action";

const initialState = {
  cancelationModalStatus: false,
  cancelation: {},
  data: {
    lastRun: null,
    nextRun: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENT_SCHEDULE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case RESET_EVENT_SCHEDULE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
