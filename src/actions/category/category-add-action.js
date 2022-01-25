﻿import { SubmissionError } from "redux-form";
import { CategoryService } from "../../services";
import get_categories from "./category-list-action";
import { getRequestInc, getRequestDec } from "../request-count-action";
import { buildValidationState } from "../../components/helpers/action-helpers";

export const SET_CATEGORY_EDITED = "SET_CATEGORY_EDITED";

const api_serv = new CategoryService();

export default function add_category(data) {
  return async dispatch => {
    dispatch(getRequestInc());
    let response;
    if (data.id) {
      response = await api_serv.editCategory(data);
    } else {
      response = await api_serv.setCategory(data);
    }
    dispatch(getRequestDec());
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(setCategoryEdited(null));
    dispatch(get_categories());
    return Promise.resolve();
  };
}

export function setCategoryEdited(data) {
  return {
    type: SET_CATEGORY_EDITED,
    payload: data,
  };
}
