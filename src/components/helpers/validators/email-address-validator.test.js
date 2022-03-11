import isValidEmail from "./email-address-validator";

describe("test validation email helper", () => {
  it("test with correct email", () => {
    const result = isValidEmail("ttttttt@uuu.uu");
    expect(result).toBe(true);
  });
  it("test with incorrect email", () => {
    const result = isValidEmail("tttttttuuu.uu");
    expect(result).toBe(false);
  });
});
