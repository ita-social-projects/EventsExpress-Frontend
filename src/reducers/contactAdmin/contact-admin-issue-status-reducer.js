import { CHANGE_STATUS } from "../../actions/contactAdmin/contact-admin-issue-status-action";
import initialState from "../../store/initialState";

const reducer = (state = initialState.contactAdminList, action) => {
  if (action.type === CHANGE_STATUS) {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
};

export default reducer;
