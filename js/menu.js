$(document).ready(width)
$(window).on('resize', width)

function width() {
  width = window.innerWidth
  if (width < 991) {
    $('.menu').addClass('menu-mobile')
  }
}

$('.botao-menu').click(function () {
  $('.menu').slideToggle('fast')
})

var linkMenu = $('.drop');
var linkMenuNome = 'drop'
var alturas = [];
headerHeight = $('.cabecalho').height() - 4

$('.section').each(function () {
  alturas[$(this).prop('id')] = $(this).offset().top;
});

linkMenu.on('click', function () {
  $("html, body").animate({
    scrollTop: $('#' + $(this).data('section')).offset().top // - headerHeight
  }, 500);
  if (width < 991) {
    $('.menu').hide()
  }
});

/*$(document).scroll(function () {
  var y = $(this).scrollTop();
  var header = $('.cabecalho').outerHeight()
  if ((y < header)) {
    $('.cabecalho').removeClass('cabecalho2')
  } else {
    $('.cabecalho').addClass('cabecalho2')
  }
  $('.section').css('min-height', 'calc(100vh - ' + header + 'px)')
});*/
