import { SubmissionError } from "redux-form";
import { UserService } from "../../services";
import { setSuccessAllert } from "../alert-action";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { getRequestInc, getRequestDec } from "../request-count-action";
import moment from 'moment';

export const editBirthdayStates = {
  UPDATE: "UPDATE_BIRTHDAY",
};

<<<<<<< HEAD
const apiService = new UserService();
=======
export default function edit_Birthday(data) {
    return async dispatch => {
        dispatch(getRequestInc());
        let body = {
            ...data,
            birthday: moment.utc(data.birthday).local().format('YYYY-MM-DD[T00:00:00]')
        };
        let response = await api_serv.setBirthday(body);
        if (!response.ok) {
            throw new SubmissionError(await buildValidationState(response));
        }
        dispatch(getRequestDec());
        dispatch(updateBirthday(data.birthday));
        dispatch(setSuccessAllert('Date of birth is successfully set'));
        return Promise.resolve();
    }
}
>>>>>>> 9f0202e6cb942d1752434bea98f2f1bb176395c2

function updateBirthday(data) {
  return {
    type: editBirthdayStates.UPDATE,
    payload: data,
  };
}

const editBirthday = data => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.setBirthday(data);
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(getRequestDec());
    dispatch(updateBirthday(data.birthday));
    dispatch(setSuccessAllert("Date of birth is successfully set"));
    return Promise.resolve();
  };
};
export default editBirthday;
