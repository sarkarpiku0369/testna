$(document).ready(function () {
    setTimeout(function () {
        $('#container-load').addClass('loaded');
        // $('body').removeClass('no-scroll-y');
        // Once the container has finished, the scroll appears
        if ($('#container-load').hasClass('loaded')) {
            // It is so that once the container is gone, the entire preloader section is deleted
            $('#preloader').delay(5000).queue(function () {
                $(this).remove();
                $('body').removeClass('no-scroll-y');
            });
        }
    }, 3000);
});

// $(window).on('load', function() { // makes sure the whole site is loaded 
//     $('#container-load').fadeOut(); // will first fade out the loading animation 
//     $('#preloader').delay(9050).fadeOut('slow'); // will fade out the white DIV that covers the website. 
//     $('body').delay(9050).css({'overflow':'visible'});
//   })