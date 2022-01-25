﻿import { recoverPassword } from "../../actions/redactProfile/password-recover-action";
import initialState from "../../store/initialState";

export const reducer = (state = initialState.recoverPassword, action) => {
  switch (action.type) {
    case recoverPassword.DATA:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
