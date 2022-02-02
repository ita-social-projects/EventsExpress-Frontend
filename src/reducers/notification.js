import initialState from "../store/initialState";
import {
  RECEIVE_MESSAGE,
  DELETE_OLD_NOTIFICATION,
  RECEIVE_SEEN_MESSAGE,
  DELETE_SEEN_MSG_NOTIFICATION,
  RECEIVED_NEW_EVENT,
} from "../actions/chat/chat-action";

import {
  GET_UNREAD_MESSAGES,
  RESET_NOTIFICATION,
} from "../actions/chat/chats-action";

const reducer = (state = initialState.notification, action) => {
  let newEvents = state.events;
  let newMsg = state.messages;

  switch (action.type) {
    case RECEIVED_NEW_EVENT:
      newEvents = newEvents.concat(action.payload);
      return {
        ...state,
        events: newEvents,
      };
    case RECEIVE_MESSAGE:
      newMsg = newMsg.concat(action.payload);
      return {
        ...state,
        messages: newMsg,
      };
    case GET_UNREAD_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case RECEIVE_SEEN_MESSAGE:
      newMsg = state.seen_messages;
      newMsg = newMsg.concat(action.payload);
      return {
        ...state,
        seen_messages: newMsg,
      };
    case DELETE_SEEN_MSG_NOTIFICATION:
      newMsg = state.seen_messages;
      newMsg = newMsg.filter(x => x.id !== action.payload);
      return {
        ...state,
        seen_messages: newMsg,
      };
    case RESET_NOTIFICATION:
      return {
        ...initialState.notification,
      };
    case DELETE_OLD_NOTIFICATION:
      newMsg = state.messages;
      newMsg = newMsg.filter(x => !action.payload.includes(x.id));
      return {
        ...state,
        messages: newMsg,
      };
    default:
      return state;
  }
};

export default reducer;
