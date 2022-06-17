import { contactAdminData } from "../actions/contactAdmin/contact-admin-add-action";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === contactAdminData.DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
};

export default reducer;
