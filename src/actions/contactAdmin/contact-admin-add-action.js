import { SubmissionError, reset } from "redux-form";
import { ContactAdminService } from "../../services";
import { setSuccessAllert } from "../alert-action";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const contactAdminData = {
  DATA: "SET_CONTACT_ADMIN_DATA",
};

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
