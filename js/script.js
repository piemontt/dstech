$(document).ready(function() {
    $('.solution_slider').slick({
        slidesToShow: 1,
        dots: true,
        dotsClass: 'slider_dots',
        arrows: true,
        prevArrow: '<div class="slider_arrow slider_arrowleft"></div>',
        nextArrow: '<div class="slider_arrow slider_arrowright"></div>',
    });

    $('.menu-item:first-child').on( 'mouseenter', function() {
        $('.sub-menu').addClass('sub-menu-active');
    } ).on( "mouseleave", function() {
        $('.sub-menu').removeClass('sub-menu-active');
    } );

    if ($(window).width() > 992) {
        $('.burger_menu').css('display', 'none');
    } else if ($(window).width() < 992) {
        $('.burger_menu').css('display', 'block');
    }
    $('.burger-button').on('click', function() {
        $('.burger_menu').css('left', '0');
    });
    $('#menu_close').on('click', function() {
        $('.burger_menu').css('left', '100%');
    });
    if ($('.modal').hasClass('show')) {
        $('.burger_menu').css('display', 'none');
    } else {
        $('.burger_menu').css('display', 'block');
    }
    
    $(function() {
        $('.main_card').matchHeight();
    });
});