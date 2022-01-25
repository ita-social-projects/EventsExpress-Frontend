import { editGender } from "../../actions/redactProfile/gender-edit-action";

export const reducer = (
  state = {
    isEditGenderPending: false,
    isEditGenderSuccess: false,
  },
  action,
) => {
  switch (action.type) {
    case editGender.PENDING:
      return { ...state, isEditGendePending: action.isEditGendePending };

    case editGender.SUCCESS:
      return { ...state, isEditGendeSuccess: action.isEditGendeSuccess };

    default:
      return state;
  }
};
