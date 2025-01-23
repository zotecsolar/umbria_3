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
        $('#preloader').delay(150).fadeOut('slow');
        $('body').delay(150).css({
            'overflow': 'visible'
        });
    });
}(jQuery)