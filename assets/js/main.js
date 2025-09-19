// Recuperar participantes e historial desde localStorage
let participantes = JSON.parse(localStorage.getItem("participantes")) || [];
let historial = JSON.parse(localStorage.getItem("historial")) || [];
let premios = [];

// Elementos del DOM
const inputNombre = document.getElementById("nombreInput");
const btnAgregar = document.getElementById("btnAgregar");
const btnSorteo = document.getElementById("btnSorteo");
const btnLimpiar = document.getElementById("btnLimpiar");
const lista = document.getElementById("listaParticipantes");
const contador = document.getElementById("contador");
const resultado = document.getElementById("resultado");
const resultadoCard = document.getElementById("resultadoCard");
const selectPremios = document.getElementById("premiosSelect");
const historialUl = document.getElementById("historialSorteos");

// Guardar participantes
function guardar() {
  localStorage.setItem("participantes", JSON.stringify(participantes));
}

// Mostrar mensaje simple
function setMensaje(texto, tipo = "") {
  // Se pueden usar alertas simples si es necesario
}

// Actualizar contador
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
    Swal.fire('Error', 'Ingresá un nombre válido.', 'error');
    return;
  }

  const existe = participantes.some(
    (p) => p.toLowerCase() === nombre.toLowerCase()
  );
  if (existe) {
    Swal.fire('Error', `"${nombre}" ya está en la lista.`, 'error');
    return;
  }

  participantes.push(nombre);
  guardar();
  mostrarParticipantes();
  Swal.fire('Agregado', `"${nombre}" fue agregado a la lista.`, 'success');
  inputNombre.value = "";
  inputNombre.focus();
}

// Eliminar participante
function eliminarParticipante(index) {
  const eliminado = participantes.splice(index, 1)[0];
  guardar();
  mostrarParticipantes();
  resultadoCard.hidden = true;
  Swal.fire('Eliminado', `"${eliminado}" fue removido de la lista.`, 'info');
}

// Limpiar participantes con SweetAlert2
async function limpiarParticipantes() {
  const result = await Swal.fire({
    title: '¿Estás seguro?',
    text: "Se borrará toda la lista de participantes",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, borrar',
    cancelButtonText: 'Cancelar'
  });

  if (!result.isConfirmed) return;

  participantes = [];
  guardar();
  mostrarParticipantes();
  resultadoCard.hidden = true;
  Swal.fire('Lista vaciada', '', 'success');
}

// Cargar premios desde JSON
async function cargarPremios() {
  try {
    const res = await fetch("./assets/data/sorteos.json");
    premios = await res.json();

    premios.forEach(p => {
      const option = document.createElement("option");
      option.value = p.id;
      option.textContent = p.premio;
      selectPremios.appendChild(option);
    });
  } catch (err) {
    console.error("Error cargando premios:", err);
  }
}

// Mostrar historial
function mostrarHistorial() {
  historialUl.innerHTML = "";
  historial.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.participante} → ${item.premio}`;
    historialUl.appendChild(li);
  });
}

// Realizar sorteo
function realizarSorteo() {
  const premioSeleccionado = selectPremios.value;

  if (!participantes.length) {
    Swal.fire('Error', 'Necesitás al menos 1 participante para sortear.', 'error');
    resultadoCard.hidden = true;
    return;
  }

  if (!premioSeleccionado) {
    Swal.fire('Error', 'Seleccioná un premio antes de sortear.', 'error');
    return;
  }

  const indice = Math.floor(Math.random() * participantes.length);
  const ganador = participantes[indice];
  const premio = premios.find(p => p.id == premioSeleccionado)?.premio || "";

  resultado.textContent = `🎉 Ganador: ${ganador} | Premio: ${premio}`;
  resultadoCard.hidden = false;

  // Guardar en historial
  historial.push({ participante: ganador, premio });
  localStorage.setItem("historial", JSON.stringify(historial));

  mostrarHistorial();
  Swal.fire('🎉 Sorteo realizado!', `Ganador: ${ganador}\nPremio: ${premio}`, 'success');
}

// Eventos
btnAgregar.addEventListener("click", agregarParticipante);
btnSorteo.addEventListener("click", realizarSorteo);
btnLimpiar.addEventListener("click", limpiarParticipantes);
inputNombre.addEventListener("keydown", (e) => { if (e.key === "Enter") agregarParticipante(); });

// Inicializaciones
mostrarParticipantes();
cargarPremios();
mostrarHistorial();
