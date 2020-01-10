// Abrir/Fechar menu
$('.botao-menu').click(function () {
  $('.menu').slideToggle()
})

$('.menu span').click(function () {
  $('.menu').slideToggle()
})

// Efeitos de click do menu
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

// Botao topo aparecer so quando o menu sumir
$(document).scroll(function () {
  var y = $(this).scrollTop();
  var header = $('.cabecalho').outerHeight()
  if ((y < header) || ($(window).scrollTop() + $(window).height() > ($(document).height() - $(".copy").outerHeight()))) {
    $('.botao-top').fadeOut();
  } else {
    $('.botao-top').fadeIn();
  }
});

// Máscara telefone
var SPMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  },
  spOptions = {
    onKeyPress: function (val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
  };

$('.input-number').mask(SPMaskBehavior, spOptions);

// Efeitos input
var input = $(".contato-input");

input.on("focus", function (event) {
  $(this).addClass("input-ativo")
});

input.on("blur", function (event) {
  if ($(this).val().length == 0) {
    $(this).removeClass("input-ativo")
  }
});

// Galeria Fancybox
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