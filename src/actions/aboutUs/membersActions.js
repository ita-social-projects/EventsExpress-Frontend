import AboutUsService from "../../services/AboutUsService";

export const GET_MEMBERS_PENDING = "GET_MEMBERS_PENDING";
export const GET_MEMBERS_SUCCESS = "GET_MEMBERS_SUCCESS";
export const GET_MEMBERS_ERROR = "GET_MEMBERS_ERROR";

export const getMembersPending = () => ({
  type: GET_MEMBERS_PENDING,
});

export const getMembersSuccess = members => ({
  type: GET_MEMBERS_SUCCESS,
  members,
});

export const getMembersError = error => ({
  type: GET_MEMBERS_ERROR,
  error,
});

export const getMembersAction = () => {
  return async dispatch => {
    dispatch(getMembersPending());
    try {
      const members = await AboutUsService.getMembers();
      dispatch(getMembersSuccess(members));
    } catch (error) {
      dispatch(getMembersError(error.message));
    }
  };
};
