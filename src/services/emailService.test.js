import emailService from "./EmailService";

describe("check emailService", () => {
  it("Is email correct", () => {
    expect(emailService({ email: "example@gmail.com" })).toBe(true);
  });
  it("Email without at(@)", () => {
    expect(emailService({ email: "examplegmail.com" })).toBe(false);
  });
  it("Email without address", () => {
    expect(emailService({ email: "example@gmailcom" })).toBe(false);
  });
  it("Email is empty", () => {
    expect(emailService({ email: "" })).toBe(false);
  });
});