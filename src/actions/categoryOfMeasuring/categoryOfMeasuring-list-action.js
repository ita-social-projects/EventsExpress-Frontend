import CategoryOfMeasuringService from "../../services/CategoryOfMeasuringService";
import { setErrorAllertFromResponse } from "../alert-action";

export const SET_CATEGORIES_OF_MEASURING_PENDING =
  "SET_CATEGORIES_OF_MEASURING_PENDING";
export const GET_CATEGORIES_OF_MEASURING_SUCCESS =
  "GET_CATEGORIES_OF_MEASURING_SUCCESS";

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
