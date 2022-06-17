import userViewAttitude from "./userViewUtils";
import { DEF, LIKE, DISLIKE } from "../../constants/userConstants";

describe("user view attitude", () => {
  it("should return object like when I pick like", () => {
    const result = userViewAttitude(0);
    expect(result).toEqual(LIKE);
  });
  it("should return object dislike when I pick dislike", () => {
    const result = userViewAttitude(1);
    expect(result).toEqual(DISLIKE);
  });
  it("should return object default for incorect value", () => {
    const result = userViewAttitude(2);
    expect(result).toEqual(DEF);
  });
});
