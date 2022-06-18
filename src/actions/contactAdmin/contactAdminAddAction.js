import { SubmissionError, reset } from "redux-form";
import { ContactAdminService } from "../../services";
import { setSuccessAllert } from "../alert/alertAction";
import { buildValidationState } from "../../helpers/actionHelpers";

import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";

const apiService = new ContactAdminService();

const contactAdmin = data => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.setContactAdmin(data);
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(getRequestDec());
    dispatch(setSuccessAllert("Message was succesfully sended"));
    dispatch(reset("ContactAdmin"));
    return Promise.resolve();
  };
};

export default contactAdmin;
