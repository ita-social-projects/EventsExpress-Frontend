import isValidEmail from "./email-address-validator";

describe("test validation email helper", () => {
  const error = "Invalid email address";

  it("test with correct email", () => {
    const result = isValidEmail("ttttttt@uuu.uu");
    expect(result).toStrictEqual({});
  });

  it("test with incorrect email", () => {
    const result = isValidEmail("tttttttuuu.uu");
    expect(result).toStrictEqual({ email: error });
  });

  it("test with incorrect email", () => {
    const result = isValidEmail("ttttt@ttuu");
    expect(result).toStrictEqual({ email: error });
  });
  it("test with empty email string", () => {
    const result = isValidEmail(" ");
    expect(result).toStrictEqual({ email: error });
  });
});
