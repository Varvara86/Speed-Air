var swiper=new Swiper(".swiper-container",{loop:!0,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3}});swiper=new Swiper(".swiper-container-1",{loop:!0,slidesPerView:3,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),swiper=new Swiper(".swiper-container-2",{spaceBetween:30,effect:"fade",pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,i){return'<span class="'+i+'">'+(e+1)+"</span>"}}});
//# sourceMappingURL=scripts-dist.js.map