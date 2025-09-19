# Proyecto Final - Simulador de Sorteo 🎲

## Descripción

**Entregable Final (JS + DOM + Eventos + localStorage)**

Este proyecto es un simulador de sorteos que permite registrar participantes, administrarlos desde la interfaz y realizar un sorteo aleatorio.  
Toda la interacción se realiza desde el HTML mediante eventos, y los datos se guardan en `localStorage` para persistir entre recargas.

## Archivos incluidos

- `index.html` – Documento base con referencia al archivo JS y estructura HTML.
- `assets/js/main.js` – Lógica del simulador: carga de datos, selección aleatoria y salida de resultados.
- `assets/css/style.css` – Estilos del simulador: colores de fondo, botones, inputs y textos.
- `README.md` – Documentación del proyecto.

## Estructura de carpetas

- index.html
- assets/
  - js/
    - main.js
  - css/
    - style.css
- README.md

> Todos los archivos JS y CSS se encuentran dentro de la carpeta `assets` para mantener organizada la estructura del proyecto.

## Cómo usar

1. Abrí `index.html` en el navegador.
2. Escribí un nombre y presioná **Agregar** (o Enter).
3. Podés **eliminar** participantes desde la lista.
4. Hacé clic en **Realizar sorteo** para ver el ganador.
5. La lista se guarda automáticamente en `localStorage`.
6. **Limpiar lista** borra los datos y la vista, previo aviso de confirmación.

## Tecnologías y criterios cubiertos

- **DOM + Eventos:** `addEventListener`, creación dinámica de nodos, actualización del DOM.
- **Flujo de trabajo completo:** entrada (input) → proceso (lógica de sorteo / validaciones) → salida (resultado en pantalla).
- **Persistencia:** uso de `localStorage` (array serializado en JSON).
- **Legibilidad:** funciones con nombres claros, comentarios breves y validaciones simples.
- **Separación de archivos:** HTML, CSS y JS en subcarpetas dentro de `assets`.

## Notas adicionales

- Se evita duplicar nombres (comparación sin distinción de mayúsculas/minúsculas).
- El botón **Limpiar lista** solicita confirmación para prevenir borrados accidentales.
