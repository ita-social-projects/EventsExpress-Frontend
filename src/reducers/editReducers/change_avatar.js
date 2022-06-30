import { changeAvatarStates } from "../../actions/redactProfile/avatar-change-action";
import initialState from "../../store/initialState";

const { UPDATE } = changeAvatarStates;
const UPDATE_COUNT = 1;

const reducer = (state = initialState.changeAvatar, action) => {
  if (action.type === UPDATE) {
    return { ...state, Update: state.Update + UPDATE_COUNT };
  }
  return state;
};

export default reducer;
