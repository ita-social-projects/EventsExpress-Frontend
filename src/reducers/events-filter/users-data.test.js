import { SET_USERS } from "../../actions/events/filter/users-data";
import usersDataReducer from "./users-data";

describe("Users Data Reducer", () => {
  it("Should return default state", () => {
    const newState = usersDataReducer([], {});
    expect(newState).toEqual([]);
  });

  it("Should return new state if receiving type", () => {
    const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const newState = usersDataReducer([], {
      type: SET_USERS,
      payload: users,
    });
    expect(newState).toEqual(users);
  });
});
