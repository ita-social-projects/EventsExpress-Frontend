import fieldIsRequired from "./required-fields-validator";

describe("test required fields validator", () => {
  it("test with correct fields list: all required fields are present", () => {
    const values = { password: "testPwd", email: "joenDoe@email.com" };
    const requiredFields = ["password", "email"];
    const result = fieldIsRequired(values, requiredFields);
    expect(result).toMatchObject({});
  });
  it("test with incorrect fields list: missed required field 'name'", () => {
    const values = { password: "testPwd", email: "joenDoe@email.com" };
    const requiredFields = ["password", "email", "name"];
    const result = fieldIsRequired(values, requiredFields);
    expect(result).toMatchObject({ name: "Required" });
  });
});
