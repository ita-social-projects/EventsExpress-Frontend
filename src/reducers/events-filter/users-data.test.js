import { SET_USERS } from "../../actions/events/filter/users-data";
import usersDataReducer from "./users-data";

describe("Users Data Reducer", () => {
  it("Should return default state", () => {
    const newState = usersDataReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return new state if receiving type", () => {
    const users = [
      {
        id: 1,
        name: "Anna",
        email: "annaa123@gmail.com",
        phone: "380978637453",
        birthday: "2000-08-23",
        gender: "women",
      },
      {
        id: 2,
        name: "Nina",
        email: "ninann123@gmail.com",
        phone: "380978637453",
        birthday: "2000-07-23",
        gender: "women",
      },
      {
        id: 3,
        name: "Jack",
        email: "jackcollin@gmail.com",
        phone: "380978637453",
        birthday: "2000-02-23",
        gender: "women",
      },
    ];
    const newState = usersDataReducer(undefined, {
      type: SET_USERS,
      payload: users,
    });
    expect(newState).toEqual(users);
  });
});
