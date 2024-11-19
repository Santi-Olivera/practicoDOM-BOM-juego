let numeroSecreto;
let iniciodelJuego = false;

// Obtener los elementos del DOM
const startButton = document.getElementById("startButton");
const submitButton = document.getElementById("submitButton");
const usuarioInput = document.getElementById("usuarioInput");
const seccionJuego = document.getElementById("seccionJuego");
const mensajeResultado = document.getElementById("mensajeResultado");

// Función para comenzar el juego
function empezarJuego() {
  // Generar un número aleatorio entre 1 y 100
  numeroSecreto = Math.floor(Math.random() * 100) + 1;

  // Mostrar la sección del juego y ocultar el botón de comenzar
  seccionJuego.classList.remove("d-none");
  startButton.classList.add("d-none");
  mensajeResultado.innerHTML = ""; // Limpiar el mensaje de resultados
  usuarioInput.value = ""; // Limpiar el campo de entrada
  usuarioInput.focus(); // Poner el foco en el campo de entrada

  // Cambiar el estado del juego
  iniciodelJuego = true;
}

// Función para verificar la respuesta
function checkGuess() {
  const userGuess = parseInt(usuarioInput.value); // Obtener el valor ingresado por el usuario

  if (isNaN(userGuess)) {
    alert("Por favor ingresa un número válido.");
    return;
  }

  // Comparar el número ingresado con el número secreto
  if (userGuess === numeroSecreto) {
    mensajeResultado.innerHTML =
      "<h4 class='text-success'>¡Felicidades! Has adivinado el número.</h4>";
    alert("¡Adivinaste el número!");
    // Ocultar la sección del juego para reiniciar el juego
    seccionJuego.classList.add("d-none");
    startButton.classList.remove("d-none");
    mensajeResultado.innerHTML =
      "<h4 class='text-info'>Haz clic en 'Comenzar el Juego' para jugar nuevamente.</h4>";
    iniciodelJuego = false;
  } else if (userGuess > numeroSecreto) {
    alert("El número ingresado es mayor al número secreto. Intenta de nuevo.");
  } else {
    alert("El número ingresado es menor al número secreto. Intenta de nuevo.");
  }
}

// Event listeners
startButton.addEventListener("click", empezarJuego);
submitButton.addEventListener("click", checkGuess);
