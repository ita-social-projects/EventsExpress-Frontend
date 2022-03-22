import isValidEmail from "./email-address-validator";

describe("validation email helper", () => {
  const error = "Invalid email address";

  it("should receive the email", () => {
    const result = isValidEmail("ttttttt@uuu.uu");
    expect(result).toStrictEqual({});
  });

  it("should receive the error", () => {
    const result = isValidEmail("tttttttuuu.uu");
    expect(result).toStrictEqual({ email: error });
  });

  it("Should receive the error", () => {
    const result = isValidEmail("ttttt@ttuu");
    expect(result).toStrictEqual({ email: error });
  });
  it("should receive the error", () => {
    const result = isValidEmail(" ");
    expect(result).toStrictEqual({ email: error });
  });
});
