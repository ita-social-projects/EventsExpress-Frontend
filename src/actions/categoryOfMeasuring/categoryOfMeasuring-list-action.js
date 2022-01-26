import CategoryOfMeasuringService from "../../services/CategoryOfMeasuringService";
import { setErrorAllertFromResponse } from "../alert-action";

export const SET_CATEGORIES_OF_MEASURING_PENDING =
  "SET_CATEGORIES_OF_MEASURING_PENDING";
export const GET_CATEGORIES_OF_MEASURING_SUCCESS =
  "GET_CATEGORIES_OF_MEASURING_SUCCESS";

const api_serv = new CategoryOfMeasuringService();

export default function getCategoriesOfMeasuring() {
  return async dispatch => {
    dispatch(setCategoryOfMeasuringPending(true));
    const response = await api_serv.getCategoriesOfMeasuring();
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getCategoriesOfMeasuringSuccess(jsonRes));
    return Promise.resolve();
  };
}


function setCategoryOfMeasuringPending(data) {
  return {
    type: SET_CATEGORIES_OF_MEASURING_PENDING,
    payload: data,
  };
}

const getCategoriesOfMeasuringSuccess = data => ({
  type: GET_CATEGORIES_OF_MEASURING_SUCCESS,
  payload: data,
});
