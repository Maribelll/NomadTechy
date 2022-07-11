const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 4,
  slidesPerGroup: 1,

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
