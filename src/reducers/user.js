import initialState from "../store/initialState";
import { SET_USER } from "../actions/login/login-action";
import { SET_LOGOUT } from "../actions/login/logout-action";
import {
  addUserCategoryStates,
  addUserNotificationTypeStates,
  editBirthdayStates,
  editGenderStates,
  editUsernameStates,
  changeAvatarStates,
} from "../actions/redactProfile/index";
import { GET_USER_NOTIFICATION_TYPES_DATA } from "../actions/notificationType/userNotificationType-action";
import { GET_USER_CATEGORIES_DATA } from "../actions/category/userCategory-action";

export const reducer = (state = initialState.user, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;

    case SET_LOGOUT:
      return initialState.user;

    case addUserCategoryStates.UPDATE:
    case GET_USER_CATEGORIES_DATA:
      return {
        ...state,
        categories: action.payload,
      };
    case addUserNotificationTypeStates.UPDATE:
    case GET_USER_NOTIFICATION_TYPES_DATA:
      return {
        ...state,
        notificationTypes: action.payload,
      };
    case editBirthdayStates.UPDATE:
      return {
        ...state,
        birthday: new Date(action.payload).toDateString(),
      };
    case editUsernameStates.UPDATE:
      return {
        ...state,
        name: action.payload.userName,
      };
    case editGenderStates.UPDATE:
      return {
        ...state,
        gender: action.payload.gender,
      };
    case changeAvatarStates.UPDATE:
      return {
        ...state,
        photoUrl: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
