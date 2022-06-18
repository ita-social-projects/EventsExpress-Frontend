import { GET_USERSINVENTORIES_DATA } from "../actions/users/usersActionTypes";

const initialState = {
  data: [],
};

export const reducer = (state = initialState, action) => {
  if (action.type === GET_USERSINVENTORIES_DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
};

export default reducer;
