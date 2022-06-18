import initialState from "../store/initialState";
import {
  GET_EVENTS_SCHEDULE_DATA,
  RESET_EVENTS_SCHEDULE,
} from "../actions/eventSchedule/eventSchedule-list-action";

const parseReccurentEvents = data =>
  data.items.map(
    ({
      eventId: id,
      frequency,
      isActive,
      lastRun,
      nextRun,
      periodicity,
      title,
    }) => ({
      id,
      frequency,
      isActive,
      lastRun,
      nextRun,
      periodicity,
      title,
    }),
  );

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
