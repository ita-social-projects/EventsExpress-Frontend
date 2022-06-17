import UnitOfMeasuringService from "../../services/unitOfMeasuringService";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import { GET_UNITS_OF_MEASURING_DATA } from "./unitOfMeasuringActionTypes";

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
