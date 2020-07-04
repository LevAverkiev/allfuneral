$(function () {

  $('input[type="file"]').styler();

  $('.header__basket-link').on('click', function () {
    $('.header__basket-drop').toggleClass('active');
  });


});