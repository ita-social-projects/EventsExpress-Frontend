import "./attitude.css";

const getAttitudeClassName = attitude => {
  switch (attitude) {
    case 0:
      return "attitude-like";
    case 1:
      return "attitude-dislike";
    default:
      return "";
  }
};

export default getAttitudeClassName;
