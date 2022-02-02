import { combineReducers } from "redux";
import usersDataReducer from "./users-data";
import locationFilterReducer from "./location-filter";

const reducer = combineReducers({
  users: usersDataReducer,
  locationFilter: locationFilterReducer,
});

export default reducer;
