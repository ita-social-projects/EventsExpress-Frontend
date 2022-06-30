import "react-widgets/dist/css/react-widgets.css";
import "react-datepicker/dist/react-datepicker.css";
import { setErrorAlert } from "../../actions/alert-action";

const NO_ENTRIES = 0;
const FIRST_VALUE = 0;

export const buildValidationState = async responseData =>
  (await responseData.json()).errors;

export const handleFormError = error => {
  return dispatch => {
    if (error) {
      dispatch(setErrorAlert(error));
    }
  };
};

export const getErrorMessage = async responseData => {
  const entries = Object.entries(await buildValidationState(responseData));
  if (entries.length === NO_ENTRIES) {
    return "Something went wrong.";
  }

  const [key, value] = entries[FIRST_VALUE];
  if (key === "_error") {
    return `Error : ${value[FIRST_VALUE]}`;
  }

  return `Error for ${key}: ${value[FIRST_VALUE]}`;
};
