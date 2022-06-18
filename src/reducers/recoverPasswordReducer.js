import { recoverPasswordStates } from "../actions/editProfile/editProfileActionTypes";

const { DATA } = recoverPasswordStates;

const initialState = {};

const reducer = (state = initialState, action) => {
  if (action.type === DATA) {
    return {
      ...state,
      isError: action.payload,
    };
  }
  return state;
};

export default reducer;
