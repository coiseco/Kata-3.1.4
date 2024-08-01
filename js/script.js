let listSliderDeact = document.querySelector('.slider-main__list');
let buttonShow = document.querySelector('#showButtonWrapper');
let buttonArrow = buttonShow.querySelector('#arrow');
let element = buttonShow.querySelector('#showButton');
let pagginationOff = document.querySelector('.swiper-pagination');

function swiperOff() {
  if (swiper) {
    swiper.destroy();
  }

  listSliderDeact.classList.add('slider-main__list--slider-deactive');
  listSliderDeact.classList.remove('swiper-wrapper');
  pagginationOff.remove();
}

function showContent() {
  buttonShow.addEventListener('click', function (evt) {
    evt.preventDefault();

    let contentShowing = document.querySelector(
      '.slider-main__list--show-content'
    );

    if (!contentShowing) {
      listSliderDeact.classList.add('slider-main__list--show-content');
      listSliderDeact.classList.remove('slider-main__list--hide-content');
      element.textContent = 'Скрыть';
      buttonArrow.classList.add('slider-button__arrow--reverse');
      buttonArrow.classList.remove('slider-button__arrow--forward');
    } else {
      listSliderDeact.classList.remove('slider-main__list--show-content');
      listSliderDeact.classList.add('slider-main__list--hide-content');
      element.textContent = 'Показать всё';
      buttonArrow.classList.remove('slider-button__arrow--reverse');
      buttonArrow.classList.add('slider-button__arrow--forward');
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
