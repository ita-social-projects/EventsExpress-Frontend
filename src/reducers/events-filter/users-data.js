import { SET_USERS } from "../../actions/events/filter/users-data";

const initialState = [];

const usersDataReducer = (state = initialState, action) => {
  if (action.type === SET_USERS) {
    return action.payload;
  }
  return state;
};

export default usersDataReducer;
