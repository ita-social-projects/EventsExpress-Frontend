import { SET_USER, SET_LOGOUT } from "../actions/login/loginActionTypes";
import {
  addUserCategoryStates,
  addUserNotificationTypeStates,
  editBirthdayStates,
  editGenderStates,
  editUsernameStates,
  changeAvatarStates,
} from "../actions/editProfile/editProfileActionTypes";
import { GET_USER_NOTIFICATION_TYPES_DATA } from "../actions/notificationType/notificationActionTypes";
import { GET_USER_CATEGORIES_DATA } from "../actions/category/categoryActionTypes";

const initialState = {
  id: null,
  name: null,
  email: null,
  phone: null,
  birthday: null,
  gender: null,
  roles: [],
  photoUrl: null,
  token: null,
  categories: [],
  notificationTypes: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;

    case SET_LOGOUT:
      return initialState;

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
