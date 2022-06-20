import getAttitudeToUser from "./getAttitudeToUser";
import {
  ATTITUDE_MESSAGES,
  ATTITUDE_ICONS,
} from "../../../constants/userConstants";

describe("Test getAttitudeToUser", () => {
  it("Correct attitude with correct values", () => {
    expect(getAttitudeToUser(0)).toEqual({
      bg: "attitude_bg_green",
      message: ATTITUDE_MESSAGES.LIKE,
      thumb: ATTITUDE_ICONS.THUMB_UP,
    });
    expect(getAttitudeToUser(1)).toEqual({
      bg: "attitude_bg_red",
      message: ATTITUDE_MESSAGES.DISLIKE,
      thumb: ATTITUDE_ICONS.THUMB_DOWN,
    });
  });
  it("Correct attitude with incorrect values", () => {
    expect(getAttitudeToUser(2)).toEqual({
      bg: null,
      message: null,
      thumb: null,
    });
    expect(getAttitudeToUser(false)).toEqual({
      bg: null,
      message: null,
      thumb: null,
    });
    expect(getAttitudeToUser("sad")).toEqual({
      bg: null,
      message: null,
      thumb: null,
    });
    expect(getAttitudeToUser({})).toEqual({
      bg: null,
      message: null,
      thumb: null,
    });
    expect(getAttitudeToUser(-213213)).toEqual({
      bg: null,
      message: null,
      thumb: null,
    });
  });
});
