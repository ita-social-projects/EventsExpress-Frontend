import isValidEmail from "./email-address-validator";

describe("validation email helper", () => {
  it("Correct data is valid", () => {
    expect(isValidEmail("ttttttt@uuu.uu")).toBe(true);
  });

  it("Incorrect data is invalid", () => {
    expect(isValidEmail("tttttttuuu.uu")).toBe(false);
    expect(isValidEmail("ttttt@ttuu")).toBe(false);
    expect(isValidEmail("")).toBe(false);
  });
});
