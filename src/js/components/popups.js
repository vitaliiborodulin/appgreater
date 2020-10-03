$('.header__navigation a').on('click', function (e) {
    e.preventDefault();
    $('.burger').toggleClass('burger--close');

    var selector = $(this).attr('href');
    
    if(selector === '#popup-1'){
      $('.popup-overlay-1').show();
    } else if(selector === '#popup-2') {
      $('.popup-overlay-2').show();
    } else if(selector === '#popup-3') {
      $('.popup-overlay-3').show();
    } else if(selector === '#popup-4') {
      $('.popup-overlay-4').show();
    }

    if($(window).width() < '768'){
      $('.burger').removeClass('burger--close');
      $('.header__navigation').removeClass('header__navigation--open');
      $('.header__lang').removeClass('header__lang--open');
    };

    $('body').css('overflow', 'hidden');
});
  
  $('.popup-form__close').on('click', function (e) {
    $('.popup-overlay').hide();
    $('body').css('overflow', 'initial');
  });
  
  $document = $(document);

  $document.mouseup(function (e){ // событие клика по веб-документу
    var div = $(".popup-wrapper"); // тут указываем элемент
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
          $('.popup-overlay').hide();
          $('body').css('overflow', 'initial');
    }
  });