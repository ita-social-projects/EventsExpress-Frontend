﻿import initialState from "../store/initialState";
import { GET_CONFIG_DATA } from "../actions/config/get-config-action";

export const reducer = (state = initialState.config, action) => {
  switch (action.type) {
    case GET_CONFIG_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
