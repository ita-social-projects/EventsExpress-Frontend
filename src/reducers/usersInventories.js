import initialState from "../store/initialState";
import { GET_USERSINVENTORIES_DATA } from "../actions/users/users-inventories-action";

export const reducer = (state = initialState.usersInventories, action) => {
  if (action.type === GET_USERSINVENTORIES_DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
};

export default reducer;
