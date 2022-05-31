import { SLIDES } from "../../../constants/HeadArticleConstant";

export default currentIndex =>
  currentIndex === SLIDES.length - 1 ? 0 : currentIndex + 1;
