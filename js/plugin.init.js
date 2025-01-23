
//Owl Carousel
$("#twitter-testi").owlCarousel({
    autoPlay: 3000,
    stopOnHover: true,
    navigation: false,
    paginationSpeed: 1000,
    goToFirstSpeed: 2000,
    singleItem: true,
    autoHeight: true,
    items: 1,
});

$("#mobile-slider").owlCarousel({
    autoPlay: 3000,
    stopOnHover: true,
    navigation: false,
    paginationSpeed: 1000,
    goToFirstSpeed: 2000,
    singleItem: true,
    autoHeight: true,
    items: 1,
});

// aos.init.js
AOS.init({
    easing: 'ease-in-out-sine',
    duration: 1000
});