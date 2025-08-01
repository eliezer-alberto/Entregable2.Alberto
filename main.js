// Array para guardar los nombres de los participantes
let participantes = [];

// Función para cargar los nombres
function cargarParticipantes() {
  let cantidad = parseInt(prompt("¿Cuántos participantes querés ingresar?"));

  while (isNaN(cantidad) || cantidad <= 0) {
    cantidad = parseInt(
      prompt("Por favor, ingresá un número válido mayor a cero.")
    );
  }

  for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Ingresá el nombre del participante " + (i + 1));

    while (nombre.trim() === "") {
      nombre = prompt(
        "El nombre no puede estar vacío. Ingresá nuevamente el nombre del participante " +
          (i + 1)
      );
    }

    participantes.push(nombre);
  }

  console.log("Participantes registrados:", participantes);
}

// Función que elige un nombre aleatoriamente
function elegirGanador() {
  let indice = Math.floor(Math.random() * participantes.length);
  return participantes[indice];
}

// Función principal que inicia el simulador
function iniciarSimulador() {
  alert("¡Bienvenido al simulador de sorteo!");

  cargarParticipantes();

  if (confirm("¿Querés realizar el sorteo ahora?")) {
    let ganador = elegirGanador();
    alert("🎉 El ganador es: " + ganador + " 🎉");
    console.log("Ganador del sorteo:", ganador);
  } else {
    alert("El sorteo fue cancelado.");
  }
}

iniciarSimulador();
