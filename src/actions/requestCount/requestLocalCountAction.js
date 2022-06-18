import {
  REQUEST_LOCAL_DEC,
  REQUEST_LOCAL_INC,
} from "./requestCountActionTypes";

// function means that request is in progress
export function getRequestLocalInc() {
  return {
    type: REQUEST_LOCAL_INC,
  };
}

// function means that request finished
export function getRequestLocalDec() {
  return {
    type: REQUEST_LOCAL_DEC,
  };
}
