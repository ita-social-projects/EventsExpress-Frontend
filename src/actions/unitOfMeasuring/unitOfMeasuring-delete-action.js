import UnitOfMeasuringService from "../../services/unitOfMeasuringService";
import getUnitsOfMeasuring from "./unitsOfMeasuring-list-action";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

const apiService = new UnitOfMeasuringService();

const deleteUnitOfMeasuring = data => {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await apiService.setUnitOfMeasuringDelete(data);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    dispatch(getRequestDec());
    dispatch(getUnitsOfMeasuring());
    return Promise.resolve();
  };
};

export default deleteUnitOfMeasuring;
