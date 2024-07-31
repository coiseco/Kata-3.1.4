let listSliderDeact = document.querySelector('.main-list');
let buttonShow = document.querySelector('#showButtonWrapper');
let buttonArrow = buttonShow.querySelector('#arrow');
let element = buttonShow.querySelector('#showButton');
let pagginationOff = document.querySelector('.swiper-pagination');

function swiperOff() {
  if (swiper) {
    swiper.destroy();
  }

  listSliderDeact.classList.add('main-list--slider-deactive');
  listSliderDeact.classList.remove('swiper-wrapper');
  pagginationOff.remove();
}

function showContent() {
  buttonShow.addEventListener('click', function (evt) {
    evt.preventDefault();

    let contentShowing = document.querySelector('.main-list--show-content');

    if (!contentShowing) {
      listSliderDeact.classList.add('main-list--show-content');
      element.textContent = 'Скрыть';
      buttonArrow.classList.add('button-wrapper__arrow--reverse');
    } else {
      listSliderDeact.classList.remove('main-list--show-content');
      element.textContent = 'Показать всё';
      buttonArrow.classList.remove('button-wrapper__arrow--reverse');
    }
  });
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

if (document.documentElement.clientWidth >= 768) {
  swiperOff();
  showContent();
} else {
  swiper;
  buttonShow.remove();
}
