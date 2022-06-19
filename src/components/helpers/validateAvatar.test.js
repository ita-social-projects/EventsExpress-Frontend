import profileConstants from "../../constants/profileConstants";
import validateAvatarForProfile from "./validateAvatar";

describe("test validate function for avatar", () => {
  it("should return small image message", () => {
    const { SMALL_IMAGE } = profileConstants;
    const expectResult = {
      image: SMALL_IMAGE,
    };
    const imageData = {
      image: {
        file: {
          size: 100,
        },
      },
    };
    const result = validateAvatarForProfile(imageData);
    expect(result).toEqual(expectResult);
  });
  it("should return require image message", () => {
    const { REQUIRED_IMAGE } = profileConstants;
    const expectResult = {
      image: REQUIRED_IMAGE,
    };
    const imageData = {};
    const result = validateAvatarForProfile(imageData);
    expect(result).toEqual(expectResult);
  });
});
