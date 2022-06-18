import {
  GET_CONTACT_ADMIN_DATA,
  RESET_CONTACT_ADMIN,
} from "../actions/contactAdmin/contact-admin-list-action";
import filterHelper from "../helpers/filterHelper";

const initialState = {
  data: {
    items: [],
    pageViewModel: {},
  },
  filter: filterHelper.getDefaultContactAdminFilter(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT_ADMIN_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case RESET_CONTACT_ADMIN:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
