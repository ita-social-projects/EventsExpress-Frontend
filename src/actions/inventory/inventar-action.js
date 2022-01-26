/* eslint-disable consistent-return */
import { SubmissionError } from "redux-form";
import { InventoryService } from "../../services";
import { getInventoriesByEventId } from "./inventory-list-action";
import { getUsersInventoriesByEventId } from "../users/users-inventories-action";
import { setErrorAllertFromResponse } from "../alert-action";
import { buildValidationState } from "../../components/helpers/action-helpers";

const API_SERV = new InventoryService();

export function addItem(item, eventId) {
  return async dispatch => {
    const response = await API_SERV.setItemToInventory(item, eventId);
    dispatch(getInventoriesByEventId(eventId));
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    return Promise.resolve();
  };
}

export function deleteItem(itemId, eventId) {
  return async dispatch => {
    const response = await API_SERV.setItemDelete(itemId, eventId);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    dispatch(getInventoriesByEventId(eventId));
    return Promise.resolve();
  };
}

export function editItem(item, eventId) {
  return async dispatch => {
    const response = await API_SERV.setItem(item, eventId);
    dispatch(getInventoriesByEventId(eventId));
    dispatch(getUsersInventoriesByEventId(eventId));
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    return Promise.resolve();
  };
}

export function wantToTake(data) {
  return async dispatch => {
    const response = await API_SERV.setWantToTake(data);
    if (response.ok) {
      dispatch(getUsersInventoriesByEventId(data.eventId));
      dispatch(getInventoriesByEventId(data.eventId));
      return Promise.resolve();
    }
  };
}
