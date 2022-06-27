import initialState from "../store/initialState";
import { GET_EVENTS_PROFILE_DATA } from "../actions/events/events-for-profile-action";

const reducer = (state = initialState.eventsForProfile, action) => {
  if (action.type === GET_EVENTS_PROFILE_DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }

  return state;
};

export default reducer;
