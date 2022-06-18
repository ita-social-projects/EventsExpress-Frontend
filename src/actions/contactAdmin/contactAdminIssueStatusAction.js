import { ContactAdminService } from "../../services";
import {
  setErrorAllertFromResponse,
  setSuccessAllert,
} from "../alert/alertAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import { CHANGE_STATUS } from "./contactAdminActionTypes";

const apiService = new ContactAdminService();

function changStatus(messageId, issueStatus) {
  return {
    type: CHANGE_STATUS,
    payload: { MessageId: messageId, issueStatus },
  };
}

const changeIssueStatus = (messageId, resolutionDetails, issueStatus) => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.updateIssueStatus({
      MessageId: messageId,
      ResolutionDetails: resolutionDetails,
      Status: issueStatus,
    });
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    dispatch(getRequestDec());
    dispatch(changStatus(messageId, issueStatus));
    dispatch(setSuccessAllert("Issue status was changed"));
    return Promise.resolve();
  };
};

export default changeIssueStatus;
