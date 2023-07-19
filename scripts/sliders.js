$("#slider").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 500,
  arrows: false,
  infinite: true,
  centerMode: true,
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 768,
      settings: "unslick",
    },
  ],
});
