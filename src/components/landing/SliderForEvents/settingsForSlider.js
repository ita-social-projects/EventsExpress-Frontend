// const settingsForSlider = {
//   centerMode: true,
//   infinite: true,
//   slidesToShow: 3,
//   speed: 500,
//   centerPadding: "0px",
//   dots: true,

//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//       },
//     },
//   ],
// };

const settingsForSlider = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  swapToSlide: true,
  arrows: false,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 767,
      settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
    },
    {
      breakpoint: 1180,
      settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false },
    },
  ],
};
export default settingsForSlider;
