const testSlider = new Swiper('.test-slider', {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.test-slider-next',
        prevEl: '.test-slider-prev'
    },
    autoplay: {
        delay: 2000
    },
    slidesPerView: 1,
    spaceBetween: 5,
    // Responsive breakpoints
    breakpoints: {
        575: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 0
        }
    }


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

