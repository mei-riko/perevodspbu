// eslint-disable-next-line import/no-unresolved
import $ from 'jquery';
import '../../node_modules/popper.js/dist/umd/popper';
import '../../node_modules/bootstrap/js/dist/util';
import '../../node_modules/bootstrap/js/dist/tooltip';
import '../../node_modules/bootstrap/js/dist/collapse';
import './form';

$(document).ready(() =>{
  $('.scroll').on('click', function scroll() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });
  // Input mask
  if( $('.phone').length > 0 ) {
    $(".phone").inputmask({
      mask: "+9 999 999 99 99",
      placeholder: " ",
      showMaskOnHover: true,

      onincomplete: function(){ 
        $(this).closest("form").addClass('error-phone'); 
        $(this).addClass('error'); 
        $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
      }, 
      oncomplete: function(){ 
        $(this).closest("form").removeClass('error-phone'); 
        $(this).removeClass('error'); 
        $(this).siblings(".error_phone").removeClass('error').html(''); 
      },
    })
  }
  $('input.phone').on('keydown', function phonemask(event) {
    if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
      event.preventDefault();
      $(this).blur();
      return false;
    }
    return null;
  });

  // Slider
  if( $('.slider').length > 0 ){
    // Slider On Index Page
    const $slickContent = $('.slider.slider_index');
		$slickContent.slick({
			slidesToShow  : 1,
			slidesToScroll: 1,
			arrows        : false,
			dots          : true,
      autoplay      : true,
      autoplaySpeed : 5000
    });
  };
  // Modal
  $('[data-fancybox]').fancybox({
    autoFocus: false,
    touch: false
  });
  // Отмена стандартного поведения ссылки
  $('a[data-trigger=click]').on('click', (event)=> {
    event.preventDefault();
  });
  // Mobile Nav
  $('.header .header__toggler').on('click', () => {
    let parent = '';
    parent = $('.header .header__navbar');
    // console.log( parent );
    if( parent.hasClass('active') ){
      parent.removeClass('active');
      $('body').removeAttr('style');
    } else{
      parent.addClass('active');
      $('body').css('overflow','hidden');
    }
  });
});

$( window ).resize(() => {
  if( window.innerWidth > 1399 ){
    $('body').removeAttr('style');
  }
});
