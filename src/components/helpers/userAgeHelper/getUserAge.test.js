import defineUserAge from "./getUserAge";
import { NOT_SPECIFIED } from "../../../constants/LabelsConstants";

describe("Test defineUserAge helper", () => {
  it("Returns Correct Age with Correct Data", () => {
    expect(defineUserAge("13/06/2021")).toBe(1);
    expect(defineUserAge("13/03/2000")).toBe(22);
    expect(defineUserAge("01/02/2019")).toBe(3);
    expect(defineUserAge("27/01/1982")).toBe(40);
    expect(defineUserAge("01/02/1950")).toBe(72);
  });

  it("Returns Not Specified with Incorrect Data", () => {
    expect(defineUserAge("12/05/2022")).toBe(NOT_SPECIFIED);
    expect(defineUserAge("")).toBe(NOT_SPECIFIED);
    expect(defineUserAge("13/02")).toBe(NOT_SPECIFIED);
    expect(defineUserAge("00/02")).toBe(NOT_SPECIFIED);
    expect(defineUserAge(23)).toBe(NOT_SPECIFIED);
    expect(defineUserAge(null)).toBe(NOT_SPECIFIED);
    expect(defineUserAge(undefined)).toBe(NOT_SPECIFIED);
    expect(defineUserAge()).toBe(NOT_SPECIFIED);
    expect(defineUserAge({})).toBe(NOT_SPECIFIED);
  });

  it("Future Date Retuns Not Specified", () => {
    expect(defineUserAge("13/06/2029")).toBe(NOT_SPECIFIED);
    expect(defineUserAge("23/02/2129")).toBe(NOT_SPECIFIED);
  });
});
