$(document).ready(function(){
   $('.carousel__inner').slick({
      prevArrow: '<button type="button" class="slick-prev"><img src = "icons/arrows/left.svg"> </button>',
      nextArrow: '<button type="button" class="slick-next"><img src = "icons/arrows/right.svg"></button>',
      responsive: [
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: true,
             arrows: false,
             dots: true
           }
         }
      ]
   });

   const hamburger = document.querySelector('.hamburger'),
         menu = document.querySelector('.menu'),
         close = document.querySelector('.menu__close');

   hamburger.addEventListener('click' , () => {
      menu.classList.add('menu__active');
   });
   close.addEventListener('click' , () => {
      menu.classList.remove('menu__active');
   });

   $('.scrollto a').on('click', function() {

      let href = $(this).attr('href');
  
      $('html, body').animate({
          scrollTop: $(href).offset().top
      }, {
          duration: 570,   // по умолчанию «400» 
          easing: "linear" // по умолчанию «swing» 
      });
  
      return false;
  });
     
  
 });

 