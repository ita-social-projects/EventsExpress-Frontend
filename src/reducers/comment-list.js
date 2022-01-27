import initialState from "../store/initialState";
import { GET_COMMENTS_DATA } from "../actions/comment/comment-list-action";

const reducer = (state = initialState.comments, action) => {
  if (action.type === GET_COMMENTS_DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }

  return state;
};

export default reducer;
