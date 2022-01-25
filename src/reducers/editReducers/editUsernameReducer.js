import { editUsername } from "../../actions/redactProfile/userName-edit-action";

export const reducer = (
  state = {
    isEditUsernamePending: false,
    isEditUsernameSuccess: false,
  },
  action,
) => {
  switch (action.type) {
    case editUsername.PENDING:
      return { ...state, isEditUsernamePending: action.isEditUsernamePending };

    case editUsername.SUCCESS:
      return { ...state, isEditUsernameSuccess: action.isEditUsernameSuccess };

    default:
      return state;
  }
};
