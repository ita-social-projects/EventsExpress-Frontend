import React from "react";
import renderer from "react-test-renderer";
import Member from "./Member";

describe("Test Member Component", () => {
  describe("Test Member With All Props Filled", () => {
    const memberObj = {
      name: "Bill",
      age: 18,
      description: "Progressive app with lots of features",
      img: "https://images.unsplash.com/photo-1654710704444-46be25450225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    };
    const { root } = renderer.create(<Member {...memberObj} />);

    it("Member Name Children", () => {
      expect(root.findByProps({ className: "member__name" }).children).toEqual([
        "Bill",
        ", ",
        "18",
      ]);
    });

    it("Check Props", () => {
      expect(root.props.name).toEqual("Bill");
      expect(root.props.age).toEqual(18);
      expect(root.props.description).toEqual(
        "Progressive app with lots of features",
      );
      expect(root.props.img).toEqual(
        "https://images.unsplash.com/photo-1654710704444-46be25450225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      );
    });
  });

  describe("Test Member With Some Props Missed", () => {
    const memberObj = {
      description: "Progressive app with lots of features and fun",
      img: "Test URL",
    };
    const { root } = renderer.create(<Member {...memberObj} />);
    it("Check that props are default", () => {
      expect(root.props.name).toEqual("Anonymous");
      expect(root.props.age).toEqual(6);
    });
  });
});
