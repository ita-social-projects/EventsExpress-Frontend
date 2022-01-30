import { SET_LOCATION } from "../../actions/events/filter/location-filter";

const initialState = {
  location: {},
};

const locationFilterReducer = (state = initialState, action) => {
  if (action.type === SET_LOCATION) {
    return {
      ...state,
      location: action.payload,
    };
  }
  return state;
};

export default locationFilterReducer;
