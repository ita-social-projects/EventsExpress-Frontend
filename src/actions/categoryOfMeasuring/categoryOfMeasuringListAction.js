import CategoryOfMeasuringService from "../../services/CategoryOfMeasuringService";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  GET_CATEGORIES_OF_MEASURING_SUCCESS,
  SET_CATEGORIES_OF_MEASURING_PENDING,
} from "./categoryOfMeasuringActionTypes";

const apiService = new CategoryOfMeasuringService();

const setCategoryOfMeasuringPending = data => ({
  type: SET_CATEGORIES_OF_MEASURING_PENDING,
  payload: data,
});

const getCategoriesOfMeasuringSuccess = data => ({
  type: GET_CATEGORIES_OF_MEASURING_SUCCESS,
  payload: data,
});

export default function getCategoriesOfMeasuring() {
  return async dispatch => {
    dispatch(setCategoryOfMeasuringPending(true));
    const response = await apiService.getCategoriesOfMeasuring();
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getCategoriesOfMeasuringSuccess(jsonRes));
    return Promise.resolve();
  };
}
