/* Template Name: Applock
   Author: Themesdesign
   Version: 1.1.0
   Created: Jan 2021
   File Description: Main Js file of the template
*/

! function($) {
    "use strict";    
    // Loader 
    $(window).on('load', function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    });
    // Menu
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
    });

   // Add this to your app.js or plugin.init.js
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 50) {
        navbar.classList.add('nav-sticky');
        navbar.style.backgroundColor = '#111d38'; // Dark blue background
    } else {
        navbar.classList.add('nav-sticky');
        navbar.style.backgroundColor = '#111d38'; // Keep dark blue even at top
    }
});

// Handle mobile menu
document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar-custom');
    navbar.style.backgroundColor = '#111d38'; // Set initial dark blue background
});
    $('.navbar-nav a, .mouse-down').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    // Scrollspy
    $("#navbarCollapse").scrollspy({ offset: 70 });
    
    // Magnific Popup
    $('.mfp-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });
    // BACK TO TOP
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    }); 

    $(".back-to-top").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 3000);
        return false;
    });
}(jQuery)
