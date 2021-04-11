$('.arrivals-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  touchThreshold: 15,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$('.categories-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  touchThreshold: 15,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$('.clients-slider').slick({
  infinite: true,
  slidesToShow: 5,
  cssEase: 'linear',
  draggable: false,
  autoplay: true,
  speed: 9000,
  autoplaySpeed: 0,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 780,
      settings: {
        draggable: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        draggable: true,
        touchThreshold: 10,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        draggable: true,
        touchThreshold: 10,
      },
    },
  ],
});
