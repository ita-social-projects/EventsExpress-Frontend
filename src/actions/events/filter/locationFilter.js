/* eslint-disable import/prefer-default-export */
import { SET_LOCATION } from "./filterActionTypes";

export const setLocation = location => ({
  type: SET_LOCATION,
  payload: location,
});
