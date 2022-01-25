import { changeAvatar } from "../../actions/redactProfile/avatar-change-action";
import initialState from "../../store/initialState";

export const reducer = (state = initialState.change_avatar, action) => {
  switch (action.type) {
    case changeAvatar.UPDATE:
      return { ...state, Update: state.Update + 1 };

    default:
      return state;
  }
};
