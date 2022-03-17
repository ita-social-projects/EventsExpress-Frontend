import { SET_USERS } from "../../actions/events/filter/users-data";
import usersDataReducer from "./users-data";

describe("Users Data Reducer", () => {
  it("Should return default state", () => {
    const newState = usersDataReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return new state if receiving type", () => {
    const users = [
      { id:1, username: "Anna" },
      { id:2, username: "Nina" },
      { id:3, username: "Jane" },
    ];
    const newState = usersDataReducer(undefined, {
      type: SET_USERS,
      payload: users,
    });
    expect(newState).toEqual(users);
  });
});
