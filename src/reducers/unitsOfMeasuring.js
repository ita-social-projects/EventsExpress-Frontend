import { GET_UNITS_OF_MEASURING_DATA } from "../actions/unitOfMeasuring/unitsOfMeasuring-list-action";
import { SET_UNIT_OF_MEASURING_EDITED } from "../actions/unitOfMeasuring/unitOfMeasuring-add-action";

const initialState = {
  units: [],
  editedUnitOfMeasuring: null,
  isAdded: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UNITS_OF_MEASURING_DATA:
      return {
        ...state,
        units: action.payload,
      };
    case SET_UNIT_OF_MEASURING_EDITED:
      return {
        ...state,
        editedUnitOfMeasuring: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
