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

var SPMaskBehavior = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
  spOptions = {
    onKeyPress: function (val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
  };

$('.input-number').mask(SPMaskBehavior, spOptions);