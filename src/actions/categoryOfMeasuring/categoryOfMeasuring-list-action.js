import CategoryOfMeasuringService from "../../services/CategoryOfMeasuringService";
import { setErrorAllertFromResponse } from "../alert-action";

export const SET_CATEGORIES_OF_MEASURING_PENDING =
  "SET_CATEGORIES_OF_MEASURING_PENDING";
export const GET_CATEGORIES_OF_MEASURING_SUCCESS =
  "GET_CATEGORIES_OF_MEASURING_SUCCESS";

const API_SERV = new CategoryOfMeasuringService();

function setCategoryOfMeasuringPending(data) {
  return {
    type: SET_CATEGORIES_OF_MEASURING_PENDING,
    payload: data,
  };
}

function getCategoriesOfMeasuringSuccess(data) {
  return {
    type: GET_CATEGORIES_OF_MEASURING_SUCCESS,
    payload: data,
  };
}

const getCategoriesOfMeasuring = () => {
  return async dispatch => {
    dispatch(setCategoryOfMeasuringPending(true));
    const response = await API_SERV.getCategoriesOfMeasuring();
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getCategoriesOfMeasuringSuccess(jsonRes));
    return Promise.resolve();
  };
};

export default getCategoriesOfMeasuring;
