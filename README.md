# coder---javascript

Curso de JavaScript en Coder House

# Simulador de Sorteo 🎲

## Descripción

**Entregable 2 (JS + DOM + Eventos + localStorage)**

Este proyecto permite ingresar participantes, administrarlos desde la interfaz y realizar un sorteo aleatorio.
Toda la interacción se realiza desde el HTML mediante eventos, y los datos se guardan en `localStorage` para persistir entre recargas.

## Archivos incluidos

- `index.html` – Documento base con una breve descripción del simulador y referencia al archivo JS.
- `main.js` – Lógica del simulador: carga de datos, selección aleatoria y salida de resultados.
- `style.css` – Estilos del simulador: Colores de fondo, estilos en botones, inputs y textos.

## Estructura de carpetas

├── index.html
├── assets/
│ ├── js/
│ │ └── main.js
│ └── css/
│ └── style.css
└── README.md

> Los archivos JS y CSS se encuentran dentro de la carpeta `assets` para mantener organizada la estructura del proyecto.

## Cómo usar

1. Abrí `index.html` en el navegador.
2. Escribí un nombre y presioná **Agregar** (o Enter).
3. Podés **eliminar** participantes desde la lista.
4. Hacé clic en **Realizar sorteo** para ver el ganador.
5. La lista se guarda automáticamente en `localStorage` (no se pierde al recargar).
6. **Limpiar lista** borra los datos y la vista.

## Tecnologías y criterios cubiertos

- **DOM + Eventos:** `addEventListener`, creación dinámica de nodos, actualización del DOM.
- **Flujo de trabajo completo:** entrada (input) → proceso (lógica de sorteo / validaciones) → salida (resultado en pantalla).
- **Storage:** persistencia con `localStorage` (array serializado en JSON).
- **Legibilidad:** funciones con nombres claros, comentarios breves, validaciones simples, sin `prompt/alert/console` en el flujo normal.
- **Separación de archivos:** HTML, CSS y JS en subcarpetas dentro de `assets`.

## Notas

- Se evita duplicar nombres (comparación sin distinción de mayúsculas/minúsculas).
- El botón **Limpiar lista** solicita confirmación para prevenir errores.
- El estilo es sencillo; podés personalizarlo en `assets/css/style.css`.
