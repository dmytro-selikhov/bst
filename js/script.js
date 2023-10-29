$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 800,
    adaptiveHeight: false,
    easing: 'liner',
    infinite: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.slider2').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 800,
    adaptiveHeight: false,
    easing: 'liner',
    infinite: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});