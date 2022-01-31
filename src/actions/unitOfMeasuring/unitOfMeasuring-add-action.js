import { SubmissionError, reset } from "redux-form";
import UnitOfMeasuringService from "../../services/unitOfMeasuringService";
import getUnitsOfMeasuring from "./unitsOfMeasuring-list-action";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const SET_UNIT_OF_MEASURING_EDITED = "SET_UNIT_OF_MEASURING_EDITED";
export const SET_UNIT_OF_MEASURING_PENDING = "SET_UNIT_OF_MEASURING_PENDING";
export const SET_UNIT_OF_MEASURING_SUCCESS = "SET_UNIT_OF_MEASURING_SUCCESS";

const apiService = new UnitOfMeasuringService();

export function setUnitOfMeasuringEdited(id) {
  return {
    type: SET_UNIT_OF_MEASURING_EDITED,
    payload: id,
  };
}

export function setUnitOfMeasuringPending(data) {
  return {
    type: SET_UNIT_OF_MEASURING_PENDING,
    payload: data,
  };
}

export function setUnitOfMeasuringSuccess(data) {
  return {
    type: SET_UNIT_OF_MEASURING_SUCCESS,
    payload: data,
  };
}

export function addUnitOfMeasuring(data) {
  return async dispatch => {
    dispatch(getRequestInc());
    let response;
    if (data.id) {
      response = await apiService.editUnitOfMeasuring(data);
    } else {
      response = await apiService.setUnitOfMeasuring(data);
    }
    dispatch(getRequestDec());
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(reset("add-form"));
    dispatch(setUnitOfMeasuringEdited(null));
    dispatch(getUnitsOfMeasuring());
    return Promise.resolve();
  };
}
