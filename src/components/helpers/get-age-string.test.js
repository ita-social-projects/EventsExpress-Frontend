import getAge from "./get-age-string";

describe("test helper", () => {
  it("test with beetwen 1-100 yeaers", () => {
    const result = getAge("10/10/2000");
    expect(result).toBe(21);
  });
  it("test with more 100 years", () => {
    const result = getAge("10/10/1900");
    expect(result).toBe("---");
  });
  it("test with less 1 years", () => {
    const result = getAge("10/10/2022");
    expect(result).toBe(0);
  });
  it("test without prop", () => {
    const result = getAge();
    expect(result).toBe(NaN);
  });
  it("test with null", () => {
    const result = getAge(null);
    expect(result).toBe(NaN);
  });
  it("test with undefined", () => {
    const result = getAge(undefined);
    expect(result).toBe(NaN);
  });
});
