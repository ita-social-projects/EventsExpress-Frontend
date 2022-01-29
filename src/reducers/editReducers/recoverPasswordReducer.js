import { recoverPasswordStates } from "../../actions/redactProfile/password-recover-action";
import initialState from "../../store/initialState";

const { DATA } = recoverPasswordStates;

const reducer = (state = initialState.recoverPassword, action) => {
  if (action.type === DATA) {
    return {
      ...state,
      isError: action.payload,
    };
  }
  return state;
};

export default reducer;
