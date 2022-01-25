import initialState from "../store/initialState";
import { GET_CHATS_DATA } from "../actions/chat/chats-action";
import { RECEIVE_MESSAGE } from "../actions/chat/chat-action";

export const reducer = (state = initialState.chats, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      var chat = state.data.find(x => x.id === action.payload.chatRoomId);
      var newChats = state.data.filter(x => x.id !== action.payload.chatRoomId);
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
