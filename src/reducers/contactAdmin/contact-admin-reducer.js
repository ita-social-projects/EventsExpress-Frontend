import { contactAdminData } from "../../actions/contactAdmin/contact-admin-add-action";
import initialState from "../../store/initialState";

const reducer = (state = initialState.contactAdmin, action) => {
  if (action.type === contactAdminData.DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
};

export default reducer;
