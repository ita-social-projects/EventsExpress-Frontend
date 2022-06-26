import "react-widgets/dist/css/react-widgets.css";
import "react-datepicker/dist/react-datepicker.css";
import { setErrorAlert } from "../../actions/alert-action";
import { ZERO_AMOUNT, ZERO_INDEX } from "../../constants/numberConstants";

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
  if (entries.length === ZERO_AMOUNT) {
    return "Something went wrong.";
  }

  const [key, value] = entries[ZERO_INDEX];
  if (key === "_error") {
    return `Error : ${value[ZERO_INDEX]}`;
  }

  return `Error for ${key}: ${value[ZERO_INDEX]}`;
};
