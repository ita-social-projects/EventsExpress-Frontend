const getRatingEffect = rating => {
  let ratingEffect;
  switch (rating) {
    case rating > 8:
      ratingEffect = "rating_success";
      break;
    case rating < 8:
      ratingEffect = "rating_warning";
      break;
    default:
      ratingEffect = "rating_danger";
  }
  return ratingEffect;
};

export default getRatingEffect;
