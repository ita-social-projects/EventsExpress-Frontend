import UnitOfMeasuringService from "../../services/unitOfMeasuringService";
import getUnitsOfMeasuring from "./unitsOfMeasuring-list-action";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

const API_SERV = new UnitOfMeasuringService();

const deleteUnitOfMeasuring = data => {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await API_SERV.setUnitOfMeasuringDelete(data);
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
