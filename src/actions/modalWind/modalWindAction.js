import { SET_OPEN_STATUS } from "./modalWindActionTypes";

export function isOpen(data) {
  return {
    type: SET_OPEN_STATUS,
    payload: data,
  };
}

export function TogleOpenWind(data) {
  return dispatch => {
    dispatch(isOpen(data));
  };
}
