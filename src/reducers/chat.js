import {
  GET_CHAT_DATA,
  RESET_CHAT,
  CONCAT_NEW_MSG,
  RECEIVE_SEEN_MESSAGE,
} from "../actions/chat/chat-action";

const initialState = {
  data: {
    messages: [],
    users: [],
    id: null,
  },
};

const reducer = (state = initialState, action) => {
  let newMsg = state.data.messages;

  switch (action.type) {
    case RESET_CHAT:
      return {
        ...initialState,
      };
    case CONCAT_NEW_MSG:
      newMsg = newMsg.concat(action.payload);
      return {
        ...state,
        data: {
          ...state.data,
          messages: newMsg,
        },
      };
    case RECEIVE_SEEN_MESSAGE:
      newMsg = state.data.messages;
      newMsg = newMsg.map(x => {
        if (action.payload.includes(x.id)) {
          // TODO
          // eslint-disable-next-line no-param-reassign
          x.seen = true;
        }
        return x;
      });
      return {
        ...state,
        data: {
          ...state.data,
          messages: newMsg,
        },
      };
    case GET_CHAT_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
