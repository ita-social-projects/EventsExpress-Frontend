import {
  GET_MEMBERS_PENDING,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_ERROR,
} from "../../actions/aboutUs/membersActionstypes";

const aboutUsInitalState = {
  members: [],
  loading: false,
  error: null,
};

const aboutUsReducer = (state = aboutUsInitalState, action) => {
  switch (action.type) {
    case GET_MEMBERS_PENDING:
      return { ...state, loading: true };
    case GET_MEMBERS_SUCCESS:
      return {
        ...state,
        members: action.members,
        loading: false,
        error: null,
      };
    case GET_MEMBERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default aboutUsReducer;
