document.addEventListener("DOMContentLoaded", function () {
  const calcularButton = document.getElementById("calcular");
  const resultadoP = document.getElementById("resultado");
  const refresh = document.getElementById("resetear");
  const clearFirst = document.getElementById("clearFirst");
  const clearSecond = document.getElementById("clearSecond");
  //Funcion del boton "Calcular"
  calcularButton.addEventListener("click", function () {
    let error = "";
    const num1 = parseFloat(document.getElementById("primerNumero").value);
    const num2 = parseFloat(document.getElementById("segundoNumero").value);
    //Manejo de errores
    if (isNaN(num1)) {
      error += `Debe Ingresar un numero en el primer casillero <br>`;
      document.getElementById("error").innerHTML = error;
    }
    if (isNaN(num2)) {
      error += `Debe Ingresar un numero en el segundo casillero <br>`;
      document.getElementById("error").innerHTML = error;
    }

    let resultado;

    let operacion = document.getElementById("operacion").value;

    switch (operacion) {
      case "sumar":
        resultado = num1 + num2;

        break;
      case "restar":
        resultado = num1 - num2;
        break;
      case "multiplicar":
        resultado = num1 * num2;
        break;
      case "dividir":
        if (num2 == 0) {
          error += `No se puede dividir por 0 <br>`;
          document.getElementById("error").innerHTML = error;
        } else resultado = num1 / num2;
        break;
      default:
        error += `Debes elegir una operación`;
        document.getElementById("error").innerHTML = error;
    }
    if (resultado || resultado == 0) {
      resultadoP.textContent = `Resultado: ${resultado}`;
      document.getElementById("error").innerHTML = "";
    }
  });
  //Funcion del boton "Refrescar"
  refresh.addEventListener("click", function () {
    document.getElementById("primerNumero").value = "";
    document.getElementById("segundoNumero").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    operacion.selectedIndex = 0;
  });
  //Funcion del boton del primer recuadro
  clearFirst.addEventListener("click", function () {
    document.getElementById("primerNumero").value = "";
  });
  //Funcion del boton del segundo recuadro
  clearSecond.addEventListener("click", function () {
    document.getElementById("segundoNumero").value = "";
  });
});
