import initialState from "../store/initialState";
import { GET_LINKED_AUTHS_SUCCESS } from "../actions/redactProfile/linked-auths-action";

const reducer = (state = initialState.account, action) => {
  if (action.type === GET_LINKED_AUTHS_SUCCESS) {
    return {
      ...state,
      linkedAuths: action.payload,
    };
  }
  return state;
};

export default reducer;
