// TODO unused reduser
import initialState from "../../store/initialState";
import {
  SET_UNIT_OF_MEASURING_PENDING,
  SET_UNIT_OF_MEASURING_SUCCESS,
} from "../../constants/unitOfMeasuringConstants";

const reducer = (state = initialState.add_unitOfMeasuring, action) => {
  switch (action.type) {
    case SET_UNIT_OF_MEASURING_PENDING:
      return {
        ...state,
        unitOfMeasuringError: null,
        isUnitOfMeasuringPending: action.payload,
      };
    case SET_UNIT_OF_MEASURING_SUCCESS:
      return {
        ...state,
        unitOfMeasuringError: null,
        isUnitOfMeasuringSuccess: action.payload,
      };
    default:
      break;
  }
  return state;
};

export default reducer;
