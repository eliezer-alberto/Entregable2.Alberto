# Simulador de Sorteo 🎲

Proyecto Final del curso de JavaScript en Coder House

---

## Descripción

Este simulador permite:

- Agregar y administrar participantes desde la interfaz web.
- Seleccionar un premio desde una lista cargada dinámicamente desde `sorteos.json`.
- Realizar un sorteo aleatorio mostrando **ganador + premio**.
- Guardar el historial de sorteos en `localStorage` para mantener registro entre recargas.
- Alertas y confirmaciones amigables con **SweetAlert2**.

Toda la interacción se realiza **directamente desde el DOM**, sin uso de `prompt`, `alert` ni `console.log`.

---

## Estructura de carpetas

- index.html
- assets/
  - js/
    - main.js
  - css/
    - style.css
  - data/
    - sorteos.json
- README.md


> Los archivos JS, CSS y JSON se encuentran dentro de la carpeta `assets` para mantener organizada la estructura del proyecto.

---

## Archivos incluidos

- `index.html` – Documento base, contiene toda la estructura del simulador.  
- `main.js` – Lógica del simulador: agregar participantes, realizar sorteos, historial y manejo de premios.  
- `style.css` – Estilos de la interfaz: diseño de tarjetas, botones, inputs y textos.  
- `sorteos.json` – Lista de premios disponibles para el sorteo.  

---

## Cómo usar

1. Abrí `index.html` en un navegador compatible.  
2. Escribí un nombre y presioná **Agregar** (o Enter) para agregar participantes.  
3. Podés **eliminar** participantes individualmente o limpiar toda la lista.  
4. Seleccioná un premio desde el menú desplegable.  
5. Hacé clic en **Realizar sorteo** para ver el ganador y el premio asignado.  
6. El historial de sorteos se guarda automáticamente y se muestra en la sección correspondiente.  

---

## Tecnologías y conceptos cubiertos

- **DOM + Eventos:** `addEventListener`, creación dinámica de nodos, actualización del DOM.  
- **Fetch + JSON:** carga de datos externos (`sorteos.json`) de manera asíncrona.  
- **localStorage:** persistencia de participantes y historial de sorteos.  
- **SweetAlert2:** alertas y confirmaciones amigables para el usuario.  
- **Flujo de trabajo completo:** entrada (inputs) → proceso (lógica del sorteo) → salida (resultado en pantalla).  
- **Legibilidad:** funciones con nombres claros, comentarios oportunos y código modular.  

---

## Notas

- Se evita duplicar nombres de participantes (comparación case-insensitive).  
- La sección de historial permite visualizar los ganadores y los premios asignados en sorteos anteriores.  
- SweetAlert2 reemplaza los `alert` y `confirm` para mejorar la experiencia de usuario.  
- Los premios se cargan desde `sorteos.json`, simulando datos externos.  
