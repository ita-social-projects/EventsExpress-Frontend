import { GET_LINKED_AUTHS_SUCCESS } from "../actions/editProfile/editProfileActionTypes";

const initialState = {
  linkedAuths: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === GET_LINKED_AUTHS_SUCCESS) {
    return {
      ...state,
      linkedAuths: action.payload,
    };
  }
  return state;
};

export default reducer;
