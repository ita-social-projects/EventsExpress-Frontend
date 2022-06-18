import { isValidEmail, fieldIsRequired } from "./formFieldValidationHelpers";

describe("Form field validation helpers tests", () => {
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

  describe("Required fields validator", () => {
    it("Should all required fields are present", () => {
      const values = { password: "testPwd", email: "joenDoe@email.com" };
      const requiredFields = ["password", "email"];
      const result = fieldIsRequired(values, requiredFields);
      expect(result).toMatchObject({});
    });
    it("Should missed required field 'name'", () => {
      const values = { password: "testPwd", email: "joenDoe@email.com" };
      const requiredFields = ["password", "email", "name"];
      const result = fieldIsRequired(values, requiredFields);
      expect(result).toMatchObject({ name: "Required" });
    });
  });
});
