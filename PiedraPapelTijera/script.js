document.addEventListener("DOMContentLoaded", function () {
  const playerName = document.getElementById("playerName");
  const playButton = document.getElementById("play");
  const message = document.getElementById("message");
  const playerChoice = document.querySelectorAll(".playerChoice");
  let playerChoiceValue = "";
  const refresh = document.getElementById("Refresh");
  const pcChoice = document.getElementById("pcChoice");
  const final = document.getElementById("Final");
  const ROCK = "Piedra";
  const PAPER = "Papel";
  const SCISSORS = "Tijeras";
  let playerNameValue = playerName.value;
  let USER_WINS = "";
  const PC_WINS = "Gano la PC";
  const DRAW = "Empate";
  let score;
  let plays = 1;
  let playerCount = 0;
  let PCCount = 0;

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

  //Funcion al azar de la jugada de la PC
  function PCRandom() {
    let num = Math.random() * 3;
    let round = Math.round(num);
    let PC;
    if (round == 0) {
      PC = ROCK;
    } else if (round == 1) {
      PC = PAPER;
    } else PC = SCISSORS;
    return PC;
  }

  playButton.addEventListener("click", function () {
    if (plays >= 5) {
      playButton.disabled = true;
      playButton.classList.add("error");
      if (PCCount > playerCount) {
        final.classList.add("Final");
        document.getElementById("Final").innerHTML = "GANO PC";
      } else if (PCCount < playerCount) {
        final.classList.add("Final");
        document.getElementById(
          "Final"
        ).innerHTML = `Gano: ${playerNameValue.toUpperCase()}`;
      } else {
        final.classList.add("Final");
        document.getElementById("Final").innerHTML = "Empate";
      }
    } else playerNameValue = playerName.value; // Obtener el valor del campo y eliminar espacios en blanco al inicio y al final
    let error = "";
    USER_WINS = `Gano ${playerNameValue.toUpperCase()}`;
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
      let PC = PCRandom();
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
        playerCount += 1;
        messageScore.innerHTML = score;
      } else {
        score = PC_WINS;
        PCCount += 1;
        messageScore.innerHTML = score;
      }
      pcChoice.innerHTML = `La PC elegío: ${PC}`;
      document.getElementById(
        "playerWin"
      ).innerHTML = `${playerNameValue.toUpperCase()}: ${playerCount}`;
      document.getElementById("PCWin").innerHTML = `PC: ${PCCount}`;
      document.getElementById("plays").innerHTML = `Jugada N°: ${plays}`;
      plays += 1;
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
    document.getElementById("playerWin").innerHTML = "";
    document.getElementById("PCWin").innerHTML = "";
    PCCount = 0;
    playerCount = 0;
    playButton.disabled = false;
    plays = 1;
    document.getElementById("plays").innerHTML = "";
    playButton.classList.remove("error");
    document.getElementById("Final").innerHTML = "";
    final.classList.remove("Final");
  });
});
