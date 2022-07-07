const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 5,
  slidesPerGroup: 1,
  // draggable: true,
  // allowTouchMove: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1220: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    1120: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },
});
