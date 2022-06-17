import {
  GET_TRACKS_DATA,
  GET_ENTITY_NAMES,
  RESET_TRACKS,
} from "../actions/tracks/track-list-action";

const initialState = {
  isError: false,
  data: {
    items: {},
    pageViewModel: {},
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKS_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case GET_ENTITY_NAMES:
      return {
        ...state,
        entityNames: action.payload,
      };
    case RESET_TRACKS:
      return initialState;
    default:
      return state;
  }
};
export default reducer;
