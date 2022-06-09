import initialState from "../store/initialState";
import {
  GET_USERS_DATA,
  RESET_USERS,
  CHANGE_USERS_FILTER,
  GET_USERS_COUNT,
  CHANGE_STATUS,
} from "../actions/users/users-action";
import {
  blockUserStates,
  unBlockUserStates,
  changeUserRoleStates,
} from "../actions/user/user-action";

const reducer = (state = initialState.users, { payload, type }) => {
  switch (type) {
    case GET_USERS_DATA:
      return {
        ...state,
        items: payload.items,
        pageViewModel: payload.pageViewModel,
      };
    case RESET_USERS:
      return initialState.users;

    case blockUserStates.UPDATE: {
      const newState = { ...state };
      newState.items = state.items.map(item => {
        if (item.id === payload) {
          const updatedItem = item;
          updatedItem.isBlocked = true;
          return updatedItem;
        }
        return item;
      });
      return newState;
    }

    case unBlockUserStates.UPDATE: {
      const newState = { ...state };
      newState.items = state.items.map(item => {
        if (item.id === payload) {
          const updatedItem = item;
          updatedItem.isBlocked = false;
          return updatedItem;
        }
        return item;
      });
      return newState;
    }

    case changeUserRoleStates.SET_EDITED: {
      return {
        ...state,
        editedUser: payload,
      };
    }

    case changeUserRoleStates.UPDATE: {
      const newState = { ...state };
      newState.items = state.items.map(item => {
        if (item.id === payload.userId) {
          const updatedItem = item;
          updatedItem.roles = payload.newRoles;
          return updatedItem;
        }
        return item;
      });
      return newState;
    }

    case CHANGE_USERS_FILTER: {
      return {
        ...state,
        userSearchFilter: payload,
      };
    }

    case GET_USERS_COUNT: {
      return {
        ...state,
        count: payload,
      };
    }

    case CHANGE_STATUS: {
      return {
        ...state,
        status: payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
