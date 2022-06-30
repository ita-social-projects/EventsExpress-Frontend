import AboutUsService from "../../services/AboutUsService";
import {
  GET_MEMBERS_PENDING,
  GET_MEMBERS_ERROR,
  GET_MEMBERS_SUCCESS,
} from "./membersActionstypes";

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

export const getMembersAction = () => async dispatch => {
  try {
    dispatch(getMembersPending());
    const members = await AboutUsService.getMembers();
    dispatch(getMembersSuccess(members));
  } catch (error) {
    dispatch(getMembersError(error.message));
  }
};
