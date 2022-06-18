import emailService from "./EmailService";
import isValidEmail from "../components/helpers/validators/email-address-validator";

describe("check emailService", () => {
  const error = "Invalid email address";
  it("Email is not empty", () => {
    const values = {
      email: "example@gmail.com",
    };
    expect(emailService(values)).toBe(true);
  });
  it("Correct email", () => {
    const correctEmail = isValidEmail("example@gmail.com");
    expect(correctEmail).toStrictEqual({});
  });
  it("Email without at(@)", () => {
    const inCorrectEmail = isValidEmail("examplegmail.com");
    expect(inCorrectEmail).toStrictEqual({ email: error });
  });
  it("Email without address", () => {
    const inCorrecAddress = isValidEmail("examplegmailcom");
    expect(inCorrecAddress).toStrictEqual({ email: error });
  });
  it("Email is empty", () => {
    const values = {
      email: "",
    };
    expect(emailService(values)).toBe(false);
  });
});
