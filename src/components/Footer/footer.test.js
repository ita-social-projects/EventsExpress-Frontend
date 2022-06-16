import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import emailService from "../../services/EmailService";
import Footer from "./Footer";

describe("check for clear EmailService working", () => {
  // Test data
  const values = {
    email: "example@gmail.com",
  };
  it("check for email", () => {
    expect(emailService(values)).toBe(true);
  });
  it("check Footer component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("check Footer button submit that its not empty", () => {
    const component = create(<Footer />);
    const instance = component.root;
    const button = instance.findByType("button");
    // console.log('BTN CHILD', button.children.length);
    expect(button.children.length).toBe(1);
  });
});
