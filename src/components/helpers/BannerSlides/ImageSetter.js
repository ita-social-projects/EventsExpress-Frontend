import { SLIDES } from "../../../constants/headArticleConstants";

export default currentIndex =>
  currentIndex === SLIDES.length - 1 ? 0 : currentIndex + 1;
