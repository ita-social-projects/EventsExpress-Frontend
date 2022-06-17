import { alert } from "../actions/alert-action";

const { SET, SETOPEN, RESET } = alert;

const initialState = {
  variant: null,
  message: null,
  autoHideDuration: null,
  open: false,
};

const reducer = (state = initialState, action) => {
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
      return initialState;
    default:
      return state;
  }
};

export default reducer;
