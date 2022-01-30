import { GET_CONTACT_ADMIN_DATA } from "../../actions/contactAdmin/contact-admin-item-action";
import initialState from "../../store/initialState";

const reducer = (state = initialState.contactAdminItem, action) => {
  if (action.type === GET_CONTACT_ADMIN_DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
};

export default reducer;
