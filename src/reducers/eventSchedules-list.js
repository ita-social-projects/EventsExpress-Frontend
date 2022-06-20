import initialState from "../store/initialState";
import {
  GET_EVENTS_SCHEDULE_DATA,
  RESET_EVENTS_SCHEDULE,
} from "../actions/eventSchedule/eventSchedule-list-action";
import parseReccurentEvents from "../components/helpers/parserEventSchedule";

const reducer = (state = initialState.eventSchedules, action) => {
  switch (action.type) {
    case GET_EVENTS_SCHEDULE_DATA:
      return {
        ...state,
        events: parseReccurentEvents(action.payload),
        isDataFetched: true,
      };
    case RESET_EVENTS_SCHEDULE:
      return initialState.eventSchedules;
    default:
      return state;
  }
};

export default reducer;
