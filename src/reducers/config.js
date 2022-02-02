import initialState from "../store/initialState";
import { GET_CONFIG_DATA } from "../actions/config/get-config-action";

const reducer = (state = initialState.config, action) => {
  if (action.type === GET_CONFIG_DATA) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};

export default reducer;
