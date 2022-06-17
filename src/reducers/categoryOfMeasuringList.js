import {
  SET_CATEGORIES_OF_MEASURING_PENDING,
  GET_CATEGORIES_OF_MEASURING_SUCCESS,
} from "../actions/categoryOfMeasuring/categoryOfMeasuring-list-action";

const initialState = {
  isPending: false,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES_OF_MEASURING_PENDING:
      return {
        ...state,
        isPending: action.payload,
      };
    case GET_CATEGORIES_OF_MEASURING_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
