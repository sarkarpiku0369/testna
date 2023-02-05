(function($){
  $(document).ready(function(){
    $('.slider-wrapper').slick({
      autoplay: true,
      dots: true,
      nextArrow: '<button class="slide-btn slide-next"><img src="./images/right.svg" /></button>',
      prevArrow: ' <button class="slide-btn slide-prev"><i class="fas fa-chevron-left"></i></button>',
      dotsClass: 'hero-dots'
    })
  });
  

  $('.our-product-slider').slick({
    slidesToShow: 4,
    centerMode: false,
    autoplay: true,
      dots: true,
      nextArrow: '<button class="slide-btn slide-next d-none"><i class="fas fa-chevron-right"></i></button>',
      prevArrow: ' <button class="slide-btn slide-prev d-none"><i class="fas fa-chevron-left"></i></button>',
      dotsClass: 'hero-dots',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ]
  })
 
})(jQuery);