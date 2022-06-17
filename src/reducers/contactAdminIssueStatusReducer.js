import { CHANGE_STATUS } from "../actions/contactAdmin/contact-admin-issue-status-action";
import filterHelper from "../components/helpers/filterHelper";

const initialState = {
  data: {
    items: [],
    pageViewModel: {},
  },
  filter: filterHelper.getDefaultContactAdminFilter(),
};

const reducer = (state = initialState, action) => {
  if (action.type === CHANGE_STATUS) {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
};

export default reducer;
