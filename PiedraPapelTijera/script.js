document.addEventListener("DOMContentLoaded", function () {
  const playerName = document.getElementById("playerName");
  const playButton = document.getElementById("play");
  const message = document.getElementById("message");

  playButton.addEventListener("click", function () {
    const playerNameValue = playerName.value.trim(); // Obtener el valor del campo y eliminar espacios en blanco al inicio y al final

    if (playerNameValue === "") {
      const wrg = document.getElementById("message");
      wrg.setAttribute("id", "ERROR"); // Mostrar mensaje de error si el campo está vacío.
      ERROR.innerHTML = "Por favor, ingrese su nombre."; //Cambiando el ID para cambiar el estilo en rojo
    } else {
      message.innerHTML = `Bienvenido ${playerNameValue}`; // Mostrar mensaje de bienvenida con el nombre ingresado
    }
  });
});
