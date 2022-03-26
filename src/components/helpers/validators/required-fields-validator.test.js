import fieldIsRequired from "./required-fields-validator";

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
