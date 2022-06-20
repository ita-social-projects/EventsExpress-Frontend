import { EMAIL_ADDRESS_VALIDATOR_REGEX } from "../../../constants/helpersConstants";

const isValidEmail = email => {
  if (!email || !EMAIL_ADDRESS_VALIDATOR_REGEX.test(email)) {
    return false;
  }
  return true;
};

export default isValidEmail;
