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
