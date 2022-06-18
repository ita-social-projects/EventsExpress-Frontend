import { GET_CATEGORY_GROUPS_DATA } from "../actions/categoryGroup/categoryGroupActionTypes";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === GET_CATEGORY_GROUPS_DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
};
export default reducer;
