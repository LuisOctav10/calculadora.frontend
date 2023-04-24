// Espero a que cargue el documento HTML para extraer los datos.
// Asigno variable "resultado" para acceder y manipular los datos recibidos.
$(document).ready(function () {
    var resultado = $("#resultado");

// Selecciono todos los botones con el atributo "data-valor" y les asigno un evento click.
// Concateno el valor del botón clickeado al valor actual del input con función .val() de Jquery.
    $("[data-valor]").click(function () {
      resultado.val(resultado.val() + $(this).data("valor"));
    });
// Mismo proceso para manipular el botón para borrar el contenido del imput por un campo vacío.
    $('[data-accion="limpiar"]').click(function () {
      resultado.val("");
    });

// Al hacer click al botón con el atributo data-action="calcular" se utiliza la función eval() de Javascript para evaluar la operación matemática, devolciendo el resultado final.
    $('[data-accion="calcular"]').click(function () {
      resultado.val(eval(resultado.val()));
    });
  });