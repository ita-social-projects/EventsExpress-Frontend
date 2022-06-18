import { INITIAL_CONNECTION, RESET_HUB } from "../actions/chat/chatActionTypes";
import { EVENT_WAS_CREATED } from "../actions/event/eventActionTypes";
import {
  SET_USERS_HUB,
  RESET_USERS_HUB,
} from "../actions/users/usersActionTypes";

const initialState = {
  chatHub: null,
  usersHub: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_CONNECTION:
      return {
        ...state,
        chatHub: action.payload,
      };
    case EVENT_WAS_CREATED:
      // TODO: Make error handling
      state.chatHub.invoke("EventWasCreated", action.payload).catch(err => err);
      return state;
    case RESET_HUB:
      return {
        ...state,
        chatHub: null,
      };
    case SET_USERS_HUB:
    case RESET_USERS_HUB:
      return {
        ...state,
        usersHub: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
