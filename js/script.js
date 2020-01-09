$('.botao-menu').click(function () {
  $('.menu').slideToggle('fast')
})

var linkMenu = $('.drop');
var alturas = [];

$('.section').each(function () {
  alturas[$(this).prop('id')] = $(this).offset().top;
});

linkMenu.on('click', function () {
  $("html, body").animate({
    scrollTop: $('#' + $(this).data('section')).offset().top
  }, 500);
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  var header = $('.cabecalho').outerHeight()
  if (y > header) {
    $('.botao-top').fadeIn();
  } else {
    $('.botao-top').fadeOut();
  }
});

var SPMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  },
  spOptions = {
    onKeyPress: function (val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
  };

$('.input-number').mask(SPMaskBehavior, spOptions);

$('.fancybox').fancybox({
  loop: true,
  buttons: [
    //"zoom",
    //"share",
    "slideShow",
    "fullScreen",
    //"download",
    "thumbs",
    "close"
  ],
  animationEffect: "zoom",
  slideShow: {
    autoStart: true,
    speed: 4000
  }
});