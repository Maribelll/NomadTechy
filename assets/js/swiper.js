const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 4,
  slidesPerGroup: 1,
  // centeredSlides: true,
  // draggable: true,
  // allowTouchMove: true,
  // slideToClickedSlide: true,
  // loop: true,
  // loopedSlides: 5,
  // effect: "coverflow",
  // coverflow: {
  //   rotate: 40,
  //   stretch: 0,
  //   depth: 50,
  //   modifier: 1,
  //   slideShadows: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1220: {
      slidesPerView: 5,
      slidesPerGroup: 1,
    },
  },
});
