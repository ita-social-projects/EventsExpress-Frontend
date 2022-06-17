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

const initialState = {
  status: null,
  count: null,
  editedUser: null,
  userSearchFilter: null,
  data: {
    items: [],
    pageViewModel: {},
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case RESET_USERS:
      return initialState;

    case blockUserStates.UPDATE: {
      const newState = { ...state };
      newState.data.items = state.data.items.map(item => {
        if (item.id === action.payload) {
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
      newState.data.items = state.data.items.map(item => {
        if (item.id === action.payload) {
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
        editedUser: action.payload,
      };
    }

    case changeUserRoleStates.UPDATE: {
      const newState = { ...state };
      newState.data.items = state.data.items.map(item => {
        if (item.id === action.payload.userId) {
          const updatedItem = item;
          updatedItem.roles = action.payload.newRoles;
          return updatedItem;
        }
        return item;
      });
      return newState;
    }

    case CHANGE_USERS_FILTER: {
      return {
        ...state,
        userSearchFilter: action.payload,
      };
    }

    case GET_USERS_COUNT: {
      return {
        ...state,
        count: action.payload,
      };
    }

    case CHANGE_STATUS: {
      return {
        ...state,
        status: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
