import initialState from "../../store/initialState";
import { GET_CATEGORY_GROUPS_DATA } from "../../actions/categoryGroup/category-group-list-action";

const reducer = (state = initialState.categoryGroups, action) => {
  if (action.type === GET_CATEGORY_GROUPS_DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
};
export default reducer;
