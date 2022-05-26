const getAttitudeToUser = attitude => {
  let attitudeToUser = {};

  switch (attitude) {
    case 0:
      attitudeToUser = {
        color: "#c2ffc2",
        message: "You like this user",
        thumb: "fa-thumbs-up",
      };
      break;
    case 1:
      attitudeToUser = {
        color: "#ffc6c2",
        message: "You dislike this user",
        thumb: "fa-thumbs-down",
      };
      break;
    default:
      attitudeToUser = { color: "", message: "", thumb: "" };
  }
  return attitudeToUser;
};

export default getAttitudeToUser;
