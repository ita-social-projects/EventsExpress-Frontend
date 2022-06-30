import userViewAttitude from "./userViewUtils";
import {
  LIKE,
  DISLIKE,
  DEF,
  NEGATIVE_ATTITUDE,
  POSITIVE_ATTITUDE,
} from "../../constants/userConstants";

const WRONG_ATTITUDE = 2;

describe("user view attitude", () => {
  it("should return object like when I pick like", () => {
    const result = userViewAttitude(POSITIVE_ATTITUDE);
    expect(result).toEqual(LIKE);
  });
  it("should return object dislike when I pick dislike", () => {
    const result = userViewAttitude(NEGATIVE_ATTITUDE);
    expect(result).toEqual(DISLIKE);
  });
  it("should return object default for incorect value", () => {
    const result = userViewAttitude(WRONG_ATTITUDE);
    expect(result).toEqual(DEF);
  });
});
