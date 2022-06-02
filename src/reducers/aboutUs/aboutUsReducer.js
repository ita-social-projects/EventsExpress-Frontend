import initialState from "../../store/initialState";
import {
  GET_MEMBERS_PENDING,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_ERROR,
} from "../../actions/aboutUs/membersActions";

const aboutUsReducer = (state = initialState.aboutUs, action) => {
  switch (action.type) {
    case GET_MEMBERS_PENDING:
      return { ...state, loading: true };
    case GET_MEMBERS_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.isLoginSuccess,
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
