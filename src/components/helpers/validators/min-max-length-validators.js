import {
  LENGTH_10,
  LENGTH_15,
  LENGTH_20,
  LENGTH_30,
  LENGTH_6,
} from "../../../constants/validatorsConstants";

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength6 = minLength(LENGTH_6);
export const minLength10 = minLength(LENGTH_10);
export const maxLength15 = maxLength(LENGTH_15);
export const minLength20 = minLength(LENGTH_20);
export const maxLength30 = maxLength(LENGTH_30);
