import { GET_CONTACT_ADMIN_DATA } from "../actions/contactAdmin/contact-admin-item-action";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === GET_CONTACT_ADMIN_DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
};

export default reducer;
