import UnitOfMeasuringService from "../../services/unitOfMeasuringService";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const GET_UNITS_OF_MEASURING_DATA = "GET_UNITS_OF_MEASURING_SUCCESS";

const apiService = new UnitOfMeasuringService();

const getUnitsOfMeasuringData = data => ({
  type: GET_UNITS_OF_MEASURING_DATA,
  payload: data,
});

const getUnitsOfMeasuring = () => {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await apiService.getUnitsOfMeasuring();
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getUnitsOfMeasuringData(jsonRes));
    dispatch(getRequestDec());
    return Promise.resolve();
  };
};

export default getUnitsOfMeasuring;
