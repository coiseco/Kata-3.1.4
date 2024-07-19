
let buttonSh = document.querySelector('.main-button');

function swiperOff() {
    let listSliderDeact = document.querySelector('.main-list');

    if (swiper){
        swiper.destroy();
    }

    listSliderDeact.classList.add('main-list--slider-deactive');
    listSliderDeact.classList.remove('swiper-wrapper')
    // listSliderDeact.style.maxWidth = (widthSize) + 'px';
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
    },

});

if (document.documentElement.clientWidth > 768 && document.documentElement.clientWidth < 1120) {
    
    swiperOff();

} else if (document.documentElement.clientWidth > 1120){
    swiperOff();
} else {
    swiper
}