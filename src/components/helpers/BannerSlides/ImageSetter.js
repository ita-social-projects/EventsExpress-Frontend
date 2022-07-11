import { SLIDES } from "../../../constants/headersConstants";
import {
  BANNER_SLIDE_STEP,
  FIRST_BANNER_SLIDE,
} from "../../../constants/imageSizesConstants";

export default currentIndex =>
  currentIndex === SLIDES.length - BANNER_SLIDE_STEP
    ? FIRST_BANNER_SLIDE
    : currentIndex + BANNER_SLIDE_STEP;
