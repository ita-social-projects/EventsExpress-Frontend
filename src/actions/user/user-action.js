import { SubmissionError } from "redux-form";
import { UserService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import { buildValidationState } from "../../components/helpers/action-helpers";

export const blockUserStates = {
  PENDING: "PENDING_BLOCK",
  SUCCESS: "SUCCESS_BLOCK",
  UPDATE: "UPDATE_BLOCKED",
};

export const unBlockUserStates = {
  PENDING: "PENDING_UNBLOCK",
  SUCCESS: "SUCCESS_UNBLOCK",
  UPDATE: "UPDATE_UNBLOCKED",
};

export const changeUserRoleStates = {
  SET_EDITED: "SET_EDITED_USER",
  PENDING: "PENDING_CHANGE_ROLE",
  SUCCESS: "SUCCESS_CHANGE_ROLE",
  UPDATE: "UPDATE_CHANGE_ROLE",
};

// change role actions

function setEditedUserData(data) {
  return {
    type: changeUserRoleStates.SET_EDITED,
    payload: data,
  };
}

function setChangeUserRolePending(data) {
  return {
    type: changeUserRoleStates.PENDING,
    payload: data,
  };
}

function setChangeUserRoleSuccess() {
  return {
    type: changeUserRoleStates.SUCCESS,
  };
}

function updateChangeUserRoles(data) {
  return {
    type: changeUserRoleStates.UPDATE,
    payload: data,
  };
}

// block User actions
function setBlockUserPending(data) {
  return {
    type: blockUserStates.PENDING,
    payload: data,
  };
}

function setBlockUserSuccess() {
  return {
    type: blockUserStates.SUCCESS,
  };
}

function updateBlockedUser(id) {
  return {
    type: blockUserStates.UPDATE,
    payload: id,
  };
}

// unBlock User actions
function setUnBlockUserPending(data) {
  return {
    type: unBlockUserStates.PENDING,
    payload: data,
  };
}

function setUnBlockUserSuccess() {
  return {
    type: unBlockUserStates.SUCCESS,
  };
}

function updateUnBlockedUser(id) {
  return {
    type: unBlockUserStates.UPDATE,
    payload: id,
  };
}

const apiService = new UserService();

// ACTION CREATOR FOR USER UNBLOCK:
export function unblockUser(id) {
  return async dispatch => {
    dispatch(setUnBlockUserPending(true));

    const response = await apiService.setUserUnblock(id);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    dispatch(setUnBlockUserSuccess());
    dispatch(updateUnBlockedUser(id));
    return Promise.resolve();
  };
}

// ACTION CREATOR FOR USER BLOCK:
export function blockUser(id) {
  return async dispatch => {
    dispatch(setBlockUserPending(true));

    const response = await apiService.setUserBlock(id);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    dispatch(setBlockUserSuccess());
    dispatch(updateBlockedUser(id));
    return Promise.resolve();
  };
}

// ACTION CREATOR FOR CHANGE USER ROLE:
export function changeUserRole(userId, newRoles) {
  return async dispatch => {
    dispatch(setChangeUserRolePending(true));

    const response = await apiService.setChangeUserRole({
      userId,
      roles: newRoles,
    });
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(setChangeUserRoleSuccess());
    dispatch(updateChangeUserRoles({ userId, newRoles }));
    return Promise.resolve();
  };
}

export function setEditedUser(userId) {
  return dispatch => {
    dispatch(setEditedUserData(userId));
  };
}
