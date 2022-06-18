import {
  GET_EVENTS_DATA,
  RESET_EVENTS,
  UPDATE_EVENTS_FILTERS,
  CHANGE_STATUS,
} from "../actions/event/eventActionTypes";
import filterHelper from "../helpers/filterHelper";

const initialState = {
  data: {
    items: [],
    pageViewModel: {},
  },
  filter: filterHelper.getDefaultEventFilter(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case CHANGE_STATUS: {
      const stateChangeEvent = { ...state };
      stateChangeEvent.data.items = state.data.items.map(item => {
        if (item.id === action.payload.eventId) {
          const updatedItem = item;
          updatedItem.eventStatus = action.payload.eventStatus;
          return updatedItem;
        }
        return item;
      });
      return stateChangeEvent;
    }
    case RESET_EVENTS:
      return initialState;
    case UPDATE_EVENTS_FILTERS:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
