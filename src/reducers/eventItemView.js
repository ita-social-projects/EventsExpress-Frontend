import {
  GET_EVENT_DATA,
  RESET_EVENT,
  event,
} from "../actions/event/event-item-view-action";
import { getRateStates, getAverageRateStates } from "../actions/rating-action";

const initialState = {
  cancelationModalStatus: false,
  cancelation: {},
  data: [],
};

const reducer = (state = initialState, action) => {
  const stateChangeEvent = { ...state };

  switch (action.type) {
    case GET_EVENT_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case event.CHANGE_STATUS:
      stateChangeEvent.data.eventStatus = action.payload.eventStatus;
      return stateChangeEvent;
    case RESET_EVENT:
      return {
        ...initialState,
      };
    case getRateStates.SUCCESS:
      return {
        ...state,
        myRate: action.payload,
      };

    case getAverageRateStates.SUCCESS:
      return {
        ...state,
        averageRate: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
