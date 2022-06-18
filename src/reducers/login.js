import {
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
} from "../actions/login/loginActionTypes";

const initialState = {
  isLoginSuccess: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return { ...state, isLoginPending: action.isLoginPending };

    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.isLoginSuccess,
        loginError: null,
        isLoginPending: false,
      };
    default:
      return state;
  }
};
export default reducer;
