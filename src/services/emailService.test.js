import emailService from "./EmailService";

describe("check emailService", () => {
  it("Is email correct", () => {
    const values = {
      email: "example@gmail.com",
    };
    expect(emailService(values)).toBe(true);
  });
  it("Email without at(@)", () => {
    const values = {
      email: "examplegmail.com",
    };
    expect(emailService(values)).toBe(false);
  });
  it("Email without address", () => {
    const values = {
      email: "example@gmailcom",
    };
    expect(emailService(values)).toBe(false);
  });
  it("Email is empty", () => {
    const values = {
      email: "",
    };
    expect(emailService(values)).toBe(false);
  });
});
