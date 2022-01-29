import { alert } from "../actions/alert-action";
import initialState from "../store/initialState";

const { SET, SETOPEN, RESET } = alert;

const reducer = (state = initialState.alert, action) => {
  switch (action.type) {
    case SET:
      return {
        variant: action.payload.variant,
        message: action.payload.message,
        autoHideDuration: action.payload.autoHideDuration,
        open: false,
      };
    case SETOPEN:
      return { ...state, open: action.payload };
    // TODO State RESET not created in actions
    case RESET:
      return initialState.alert;
    default:
      return state;
  }
};

export default reducer;
