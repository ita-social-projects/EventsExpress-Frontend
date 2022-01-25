﻿import initialState from "../store/initialState";
import { SET_OPEN_STATUS } from "../actions/modalWind-action";
import { SET_LOGIN_SUCCESS } from "../actions/login/login-action";

export const reducer = (state = initialState.modalWind, action) => {
  switch (action.type) {
    case SET_OPEN_STATUS:
      return { ...state, isOpen: action.payload };
    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
