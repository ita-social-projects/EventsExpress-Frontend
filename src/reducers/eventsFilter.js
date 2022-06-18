import { combineReducers } from "redux";
import usersDataReducer from "./usersData";
import locationFilterReducer from "./locationFilter";

const reducer = combineReducers({
  users: usersDataReducer,
  locationFilter: locationFilterReducer,
});

export default reducer;
