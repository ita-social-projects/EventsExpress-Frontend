import {
  GET_CHATS_DATA,
  RECEIVE_MESSAGE,
} from "../actions/chat/chatActionTypes";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  let chat;
  let newChats;
  switch (action.type) {
    case RECEIVE_MESSAGE:
      chat = state.data.find(x => x.id === action.payload.chatRoomId);
      newChats = state.data.filter(x => x.id !== action.payload.chatRoomId);
      if (chat != null) {
        chat.lastMessage = action.payload.text;
        chat.lastMessageTime = action.payload.dateCreated;
        newChats = newChats.concat(chat);
      }
      return {
        ...state,
        data: newChats,
      };
    case GET_CHATS_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
