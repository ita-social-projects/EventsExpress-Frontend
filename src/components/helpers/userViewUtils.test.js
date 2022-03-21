import userViewAttitude from "./userViewUtils";
import { like, dislike, def } from "../../constants/userViewAttitudeConstants";

describe("user view attitude", () => {
  it("should return object like when I pick like", () => {
    const result = userViewAttitude(0);
    expect(result).toEqual(like);
  });
  it("should return object dislike when I pick dislike", () => {
    const result = userViewAttitude(1);
    expect(result).toEqual(dislike);
  });
  it("should return object default for incorect value", () => {
    const result = userViewAttitude(2);
    expect(result).toEqual(def);
  });
});
