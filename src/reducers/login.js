import {
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR
} from "../actions/login";
import initialState from '../store/initialState';
import { 
  SET_LOGOUT }
  from '../actions/logout';

export const reducer = (
  state = initialState.register,
  action
) => {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess,
        loginError: null

      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError,
        isLoginSuccess: false
      });

    case SET_LOGOUT:
      return Object.assign({}, state, {
        isLoginSuccess: !action.isLoginSuccess
      });

    default:
      return state;
  }
}