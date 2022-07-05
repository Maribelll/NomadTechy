const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 5,
  // Navigation arrows
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //     draggable: true,
  //   },
  slidesPerGroup: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
