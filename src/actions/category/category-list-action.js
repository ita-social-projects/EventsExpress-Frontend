﻿import { CategoryService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const GET_CATEGORIES_DATA = "GET_CATEGORIES_DATA";

const API_SERV = new CategoryService();

function getCategoriesData(data) {
  return {
    type: GET_CATEGORIES_DATA,
    payload: data,
  };
}

const getСategories = () => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await API_SERV.getAllCategories();
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getRequestDec());
    dispatch(getCategoriesData(jsonRes));
    return Promise.resolve();
  };
};

export default getСategories;
