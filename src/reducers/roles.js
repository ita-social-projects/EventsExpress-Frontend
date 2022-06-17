import { getRolesData } from "../actions/roles/rolesActionTypes";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === getRolesData.DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }

  return state;
};

export default reducer;
