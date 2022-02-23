const settingsForSlider = {
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  centerPadding: "0px",
  dots: true,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
      },
    },
  ],
};
export default settingsForSlider;
