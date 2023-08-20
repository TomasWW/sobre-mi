document.addEventListener("DOMContentLoaded", function () {
  const playerName = document.getElementById("playerName");
  const playButton = document.getElementById("play");
  const message = document.getElementById("message");
  const playerChoice = document.querySelectorAll(".playerChoice");
  let playerChoiceValue = "";
  const refresh = document.getElementById("Refresh");
  const pcChoice = document.getElementById("pcChoice");
  const ROCK = "Piedra";
  const PAPER = "Papel";
  const SCISSORS = "Tijeras";
  let playerNameValue = playerName.value;
  let USER_WINS = "";
  const PC_WINS = "Gano la PC";
  const DRAW = "Empate";
  let score;

  playerChoice.forEach(function (button) {
    //Me muestra con un recuadro cual selecciono el usuario
    button.addEventListener("click", function () {
      playerChoice.forEach(function (otherButton) {
        otherButton.classList.remove("Selected");
      });

      button.classList.add("Selected");
    });
  });

  playerChoice.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonId = this.id; // Obtener el valor del atributo "id" del botón clicado

      if (buttonId == "ROCK") {
        playerChoiceValue = "Piedra";
      }
      if (buttonId == "PAPER") {
        playerChoiceValue = "Papel";
      }
      if (buttonId == "SCISSORS") {
        playerChoiceValue = "Tijeras";
      }
    });
  });
  //   playButton.addEventListener("click", function () {
  //     //Funcion al azar de la jugada de la PC
  //     let num = Math.random() * 3;

  //     let round = Math.round(num);
  //     let PC;
  //     if (round == 0) {
  //       PC = ROCK;
  //     } else if (round == 1) {
  //       PC = PAPER;
  //     } else PC = SCISSORS;

  //     return (pcChoice.innerHTML = PC);
  //   });

  playButton.addEventListener("click", function () {
    playerNameValue = playerName.value; // Obtener el valor del campo y eliminar espacios en blanco al inicio y al final
    let error = "";
    USER_WINS = `Gano ${playerNameValue}`;
    if (playerNameValue === "") {
      message.classList.add("error"); //Si hay un error agrega la clase ERROR para poder darle estilo
      error += `Por favor, ingrese su nombre.<br>`;
    }
    if (playerChoiceValue == "") {
      message.classList.add("error"); //Si hay un error agrega la clase ERROR para poder darle estilo
      error += `Por favor, seleccione su opción.<br>`;
    }
    if (error !== "") {
      message.innerHTML = error;
    } else {
      message.classList.remove("error"); //Elimina la clase error para mantener el formato anterior
      message.innerHTML = `Bienvenido ${playerNameValue.toUpperCase()}, has elegido ${playerChoiceValue}`; // Mostrar mensaje de bienvenida con el nombre ingresado
      ///Funcion al azar de la jugada de la PC
      let num = Math.random() * 3;
      let round = Math.round(num);
      let PC;
      if (round == 0) {
        PC = ROCK;
      } else if (round == 1) {
        PC = PAPER;
      } else PC = SCISSORS;
      //Determina las reglas
      if (PC == playerChoiceValue) {
        score = DRAW;
        messageScore.innerHTML = score;
      } else if (
        (playerChoiceValue == ROCK && PC == SCISSORS) ||
        (playerChoiceValue == SCISSORS && PC == PAPER) ||
        (playerChoiceValue == PAPER && PC == ROCK)
      ) {
        score = USER_WINS;
        messageScore.innerHTML = score;
      } else {
        score = PC_WINS;
        messageScore.innerHTML = score;
      }

      return (pcChoice.innerHTML = `La PC elegío: ${PC}`);
    }
  });

  refresh.addEventListener("click", function () {
    //Boton Resetear por defecto el sitio
    message.innerHTML = "";
    messageScore.innerHTML = "";
    document.getElementById("pcChoice").innerHTML = "Elección de la PC";
    document.getElementById("playerName").value = "";
    playerChoice.forEach(function (button) {
      button.classList.remove("Selected"); // Eliminar la clase "Selected" de todos los botones
    });
    playerChoiceValue = "";
  });
});
