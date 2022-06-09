import { SLIDES } from "../../../constants/headersConstants";

export default currentIndex =>
  currentIndex === SLIDES.length - 1 ? 0 : currentIndex + 1;
