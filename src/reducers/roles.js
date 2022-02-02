import initialState from "../store/initialState";
import { getRolesData } from "../actions/roles";

const reducer = (state = initialState.roles, action) => {
  if (action.type === getRolesData.DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }

  return state;
};

export default reducer;
