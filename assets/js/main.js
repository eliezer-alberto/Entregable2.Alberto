// Recuperar participantes desde localStorage
let participantes = JSON.parse(localStorage.getItem("participantes")) || [];

// Elementos del DOM
const inputNombre = document.getElementById("nombreInput");
const btnAgregar = document.getElementById("btnAgregar");
const btnSorteo = document.getElementById("btnSorteo");
const btnLimpiar = document.getElementById("btnLimpiar");
const lista = document.getElementById("listaParticipantes");
const contador = document.getElementById("contador");
const resultado = document.getElementById("resultado");
const resultadoCard = document.getElementById("resultadoCard");
const mensaje = document.getElementById("mensaje");

// Guardar participantes en localStorage
function guardar() {
  localStorage.setItem("participantes", JSON.stringify(participantes));
}

// Mostrar mensaje en pantalla
function setMensaje(texto, tipo = "") {
  mensaje.textContent = texto;
  mensaje.className = tipo ? `mensaje ${tipo}` : "mensaje";
}

// Actualizar contador de participantes
function actualizarContador() {
  contador.textContent = participantes.length;
}

// Mostrar lista de participantes
function mostrarParticipantes() {
  lista.innerHTML = "";
  participantes.forEach((nombre, i) => {
    const li = document.createElement("li");
    li.className = "item";

    const span = document.createElement("span");
    span.className = "nombre";
    span.textContent = nombre;

    const derecha = document.createElement("div");
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = `#${i + 1}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.className = "btn-icon";
    btnEliminar.setAttribute("aria-label", `Eliminar a ${nombre}`);
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => eliminarParticipante(i));

    derecha.appendChild(badge);
    derecha.appendChild(btnEliminar);

    li.appendChild(span);
    li.appendChild(derecha);

    lista.appendChild(li);
  });
  actualizarContador();
}

// Agregar participante
function agregarParticipante() {
  const nombre = inputNombre.value.trim();
  if (!nombre) {
    setMensaje("Ingresá un nombre válido.", "error");
    return;
  }

  const existe = participantes.some(
    (p) => p.toLowerCase() === nombre.toLowerCase()
  );
  if (existe) {
    setMensaje(`"${nombre}" ya está en la lista.`, "error");
    return;
  }

  participantes.push(nombre);
  guardar();
  mostrarParticipantes();
  setMensaje(`Se agregó "${nombre}" a la lista.`);
  inputNombre.value = "";
  inputNombre.focus();
}

// Eliminar participante
function eliminarParticipante(index) {
  const eliminado = participantes.splice(index, 1)[0];
  guardar();
  mostrarParticipantes();
  setMensaje(`Se eliminó "${eliminado}" de la lista.`);
  resultadoCard.hidden = true;
}

// Realizar sorteo aleatorio
function realizarSorteo() {
  if (!participantes.length) {
    setMensaje("Necesitás al menos 1 participante para sortear.", "error");
    resultadoCard.hidden = true;
    return;
  }

  const indice = Math.floor(Math.random() * participantes.length);
  const ganador = participantes[indice];
  resultado.textContent = `🎉 Ganador: ${ganador}`;
  resultadoCard.hidden = false;
  setMensaje("");
}

// Limpiar participantes
function limpiarParticipantes() {
  if (!confirm("¿Seguro que querés limpiar toda la lista?")) return;
  participantes = [];
  guardar();
  mostrarParticipantes();
  resultadoCard.hidden = true;
  setMensaje("Lista vaciada.");
}

// Eventos
btnAgregar.addEventListener("click", agregarParticipante);
btnSorteo.addEventListener("click", realizarSorteo);
btnLimpiar.addEventListener("click", limpiarParticipantes);

// Agregar con Enter
inputNombre.addEventListener("keydown", (e) => {
  if (e.key === "Enter") agregarParticipante();
});

// Render inicial
mostrarParticipantes();
