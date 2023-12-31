$(document).ready(function(){

    $('.product_slider').slick({
      variableWidth: true,
      slidesToShow: 1,
      dots: true,
    }); 
    
    $(window).scroll(function(){
      if ($(this).scrollTop() > 0) {
        $('.header').addClass('header-shadow')
      }
    })

    $('.product_button:first-child').addClass('product_button-active');
    $('.product_button').each(function(index) {
      $( this ).on('click', function() {
        $('.product_info').css('display', 'none');
        $('.product_info').eq(index).css('display', 'block');
        $('.product_button').removeClass('product_button-active');
        $(this).addClass('product_button-active');
      })
    })

    if ($(window).width() > 992) {
      $('.burger_menu').css('display', 'none')
    }
    else if ($(window).width() < 992) {
      $('.burger_menu').css('display', 'block')
    }
    $('.burger_button').on('click', function(){
     $('.burger_menu').css('left', '0')
    })
    $('#menu_close').on('click', function(){
      $('.burger_menu').css('left', '100%')
    })

    /****ниже костыли*****/
    if (('.modal').hasClass('show')) {
      $('.burger_menu').css('display', 'none')
    }
    else {
      $('.burger_menu').css('display', 'block')
    }

    
    
});
