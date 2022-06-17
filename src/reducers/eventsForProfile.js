import { GET_EVENTS_PROFILE_DATA } from "../actions/events/events-for-profile-action";

const initialState = {
  data: {
    items: [],
    pageViewModel: {},
  },
};

const reducer = (state = initialState, action) => {
  if (action.type === GET_EVENTS_PROFILE_DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }

  return state;
};

export default reducer;
