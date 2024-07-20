let buttonSh = document.querySelector('.main-button');

function swiperOff() {
  let listSliderDeact = document.querySelector('.main-list');

  if (swiper) {
    swiper.destroy();
  }

  listSliderDeact.classList.add('main-list--slider-deactive');
  listSliderDeact.classList.remove('swiper-wrapper');
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  gap: 16,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

if (document.documentElement.clientWidth > 768) {
  swiperOff();
} else {
  swiper;
}
