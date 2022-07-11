import AboutUsService from "../../services/AboutUsService";
import {
  GET_MEMBERS_PENDING,
  GET_MEMBERS_ERROR,
  GET_MEMBERS_SUCCESS,
} from "./membersActionstypes";

const getMembersPending = () => ({
  type: GET_MEMBERS_PENDING,
});

const getMembersSuccess = members => ({
  type: GET_MEMBERS_SUCCESS,
  members,
});

const getMembersError = error => ({
  type: GET_MEMBERS_ERROR,
  error,
});

const getMembersAction = () => async dispatch => {
  try {
    dispatch(getMembersPending());
    const members = await AboutUsService.getMembers();
    dispatch(getMembersSuccess(members));
  } catch (error) {
    dispatch(getMembersError(error.message));
  }
};

export default getMembersAction;
