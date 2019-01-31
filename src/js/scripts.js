(function($) {
  $(function() {
   
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
   
  });
  })(jQuery);


(function($) {
  $(function() {
     
    $('form').on('click', '.options:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active');
    });
     
  });
  })(jQuery);


$('.container .advanced_options').on('click',function(){
  if($(this).siblings('.advanced_options__show').is(":visible")){
    $(this).siblings('.advanced_options__show').hide();
  }
  else $(this).siblings('.advanced_options__show').show();
});


$( function() {
  $( "#datepicker" ).datepicker();
} );

$( function() {
  $( "#datepicker-1" ).datepicker();
} );


$( function() {
  $( "#accordion" ).accordion();
} );

$( function() {
  $( "#accordion-1" ).accordion();
} );

$( function() {
  $( "#accordion-2" ).accordion();
} );

$( function() {
  $( "#accordion-3" ).accordion();
} );

$( function() {
  $( "#accordion-4" ).accordion();
} );

var swiper = new Swiper('.swiper-container-0', {
  loop: true,
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
},
});

var swiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
  });

  var swiper = new Swiper('.swiper-container-1', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper('.swiper-container-2', {
    effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
  });


//   swiper = new Swiper(".swiper-container-2", {
//     effect: 'cube',
//       grabCursor: true,
//       cubeEffect: {
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94,
//       },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: !0,
//         renderBullet: function (e, i) {
//             return '<span class="' + i + '">' + (e + 1) + "</span>"
//         }
//     }
// })

 
  var swiper = new Swiper('.swiper-container-3', {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });