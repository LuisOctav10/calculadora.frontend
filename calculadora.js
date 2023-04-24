$(document).ready(function () {
    var resultado = $("#resultado");

    $("[data-valor]").click(function () {
      resultado.val(resultado.val() + $(this).data("valor"));
    });

    $('[data-accion="limpiar"]').click(function () {
      resultado.val("");
    });

    $('[data-accion="calcular"]').click(function () {
      resultado.val(eval(resultado.val()));
    });
  });