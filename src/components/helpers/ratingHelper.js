import { SUCCESS_WARNING_BORDER_RATING } from "../../constants/userConstants";

const getRatingEffect = rating => {
  let ratingEffect;
  switch (rating) {
    case rating > SUCCESS_WARNING_BORDER_RATING:
      ratingEffect = "rating_success";
      break;
    case rating < SUCCESS_WARNING_BORDER_RATING:
      ratingEffect = "rating_warning";
      break;
    default:
      ratingEffect = "rating_danger";
  }
  return ratingEffect;
};

export default getRatingEffect;
