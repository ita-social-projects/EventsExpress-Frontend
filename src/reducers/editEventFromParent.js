import {
  SET_EVENT_FROM_PARENT_PENDING,
  SET_EVENT_FROM_PARENT_SUCCESS,
} from "../actions/event/event-copy-with-edit-action";

const initialState = {
  isEventFromParentPending: false,
  isEventFromParentSuccess: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENT_FROM_PARENT_PENDING:
      return {
        ...state,
        isEventFromParentPending: action.payload,
      };
    case SET_EVENT_FROM_PARENT_SUCCESS:
      return {
        ...state,
        isEventFromParentPending: false,
        isEventFromParentSuccess: action.payload,
      };
    default:
      break;
  }
  return state;
};

export default reducer;
