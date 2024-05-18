var swiper = new Swiper(".mySwiper1", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });







  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    
    pagination: {
      
      clickable: true,
    },
    breakpoints: {
      
      200: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      575: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      675: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween:60,
      },
      992: {
      slidesPerView: 4,
      spaceBetween:60,
    },
    1200: {
      slidesPerView:5,
      spaceBetween:80,
    },

      
    },
  });  



  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }, breakpoints: {
        972: {
            slidesPerView:4,
            spaceBetween:16,
          },

          500: {
            slidesPerView:2,
            spaceBetween:30,
          },

          
          768: {
            slidesPerView: 3,
            spaceBetween:16,
          },
         
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        333: {
            slidesPerView:1.3,
            spaceBetween:10,
          },
        "@0.75": {
          slidesPerView: 1.8,
          spaceBetween: 13,
        },
        

       1200: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
    }
  });


  var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 3,
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }, breakpoints: {
        972: {
            slidesPerView:3,
            spaceBetween:16,
          },

          900: {
            slidesPerView:2.3,
            spaceBetween:30,
          },
          500: {
            slidesPerView:2.3,
            spaceBetween:30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween:16,
          },
         
          400: {
            slidesPerView: 2,
            spaceBetween:16,
          },
        "@0.00": {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
       
       
        

       1200: {
          slidesPerView: 3,
          spaceBetween:10 ,
        },
    }
  });


// ---------------------

var swiper = new Swiper(".mySwiper5", {
  watchSlidesProgress: true,

 
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch:-10,
    depth: 150,
    modifier: 1,
    slideShadows: false,

  },
   breakpoints: {
  576: {
        slidesPerView:1,
        
      },
     768: {
       slidesPerView:2,
             
      },

      992:{
        slidesPerView:3,
      }     

    }
});
  