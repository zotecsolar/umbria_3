/* Template Name: Applock
   Author: Themesdesign
   Version: 1.1.0
   Created: Jan 2021
   File Description: Main Js file of the template
*/

! function($) {
    "use strict";    
    // Menu
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
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