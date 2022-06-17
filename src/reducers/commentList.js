import { GET_COMMENTS_DATA } from "../actions/comment/commentActionTypes";

const initialState = {
  data: {
    items: [],
    pageViewModel: {},
  },
};

const reducer = (state = initialState, action) => {
  if (action.type === GET_COMMENTS_DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }

  return state;
};

export default reducer;
