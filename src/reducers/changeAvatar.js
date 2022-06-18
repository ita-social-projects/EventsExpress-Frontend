import { changeAvatarStates } from "../actions/editProfile/editProfileActionTypes";

const { UPDATE } = changeAvatarStates;

const initialState = {
  Update: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === UPDATE) {
    return { ...state, Update: state.Update + 1 };
  }
  return state;
};

export default reducer;
