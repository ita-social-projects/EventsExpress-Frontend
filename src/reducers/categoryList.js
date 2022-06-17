﻿import { GET_CATEGORIES_DATA } from "../actions/category/category-list-action";
import { GET_CATEGORIES_BY_GROUP_ID } from "../actions/category/category-list-by-groupid-action";
import { SET_CATEGORY_EDITED } from "../actions/category/category-add-action";

const initialState = {
  editedCategory: null,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_BY_GROUP_ID:
    case GET_CATEGORIES_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_CATEGORY_EDITED:
      return {
        ...state,
        editedCategory: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
