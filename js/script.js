
if (document.documentElement.clientWidth > 768) {
    if (swiper){
        swiper.destroy();
    }
    
}else {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: auto,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
    });
}