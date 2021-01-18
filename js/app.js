const testSlider = new Swiper('.test-slider',{
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.test-slider-next',
        prevEl: '.test-slider-prev'
    },
    // autoplay: {
    //     delay: 2000
    // }
});

const specialitesSlider = new Swiper('.specialties-slider', {
    loop: true,
    effect: 'coverflow',
    pagination: {
        el: '.specialties-slider-pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'slider-bullet',
        bulletActiveClass: 'slider-bullet-active'
      },
})