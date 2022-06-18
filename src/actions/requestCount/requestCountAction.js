import { REQUEST_INC, REQUEST_DEC } from "./requestCountActionTypes";

// function means that request is in progress
export function getRequestInc() {
  return {
    type: REQUEST_INC,
  };
}

// function means that request finished
export function getRequestDec() {
  return {
    type: REQUEST_DEC,
  };
}
