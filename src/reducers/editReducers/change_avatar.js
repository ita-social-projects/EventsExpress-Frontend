import { changeAvatarStates } from "../../actions/redactProfile/avatar-change-action";
import { INCREMENT } from "../../constants/numberConstants";
import initialState from "../../store/initialState";

const { UPDATE } = changeAvatarStates;

const reducer = (state = initialState.changeAvatar, action) => {
  if (action.type === UPDATE) {
    return { ...state, Update: state.Update + INCREMENT };
  }
  return state;
};

export default reducer;
