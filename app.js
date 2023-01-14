$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.navbar').addClass('scroll-effect');
    } else
        $('.navbar').removeClass('scroll-effect');
});