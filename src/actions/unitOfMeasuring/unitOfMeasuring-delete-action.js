import UnitOfMeasuringService from "../../services/unitOfMeasuringService";
import get_unitsOfMeasuring from "./unitsOfMeasuring-list-action";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

const API_SERV = new UnitOfMeasuringService();

export function delete_unitOfMeasuring(data) {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await API_SERV.setUnitOfMeasuringDelete(data);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    dispatch(getRequestDec());
    dispatch(get_unitsOfMeasuring());
    return Promise.resolve();
  };
}
