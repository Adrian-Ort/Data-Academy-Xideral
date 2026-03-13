/**
 * data.js — Contenido del portafolio
 * ====================================
 * Aquí agregas todos tus ejercicios y tareas.
 * No necesitas tocar ningún otro archivo para añadir contenido.
 *
 * CÓMO AGREGAR UN EJERCICIO:
 *   1. Exporta tu Jupyter Notebook como HTML
 *   2. Crea la carpeta:  ejercicios/XX/
 *   3. Coloca el HTML exportado como: ejercicios/XX/index.html
 *   4. Copia el bloque de ejemplo de abajo, cambia los datos y pégalo en EJERCICIOS
 *
 * CÓMO AGREGAR UNA TAREA:
 *   1. Igual que ejercicios, pero en la carpeta: tareas/XX/
 *   2. Agrega el objeto al array TAREAS
 *
 * CAMPO imagen:
 *   - Es opcional. Si no tienes captura, deja la cadena vacía: imagen: ""
 *   - Si tienes imagen, pon la ruta relativa: imagen: "assets/img/ej-01.png"
 */

/* ─────────────────────────────────────────────
   EJERCICIOS EN CLASE
   El enlace al archivo HTML se genera
   automáticamente como: ejercicios/{id}/index.html
   ───────────────────────────────────────────── */
const EJERCICIOS = [
  {
    id: "01",
    titulo: "Ejercicios Prácticos — Listas y Ventas en Python",
    descripcion: "Manejo de listas en Python: suma de ventas con sum(), cálculo de promedio y filtrado de datos con condicionales.",
    codigo: "ventas = [12, 8, 15, 20, 50]\ntotal = sum(ventas)\nprint('Total de ventas:', total)",
    imagen: ""
  }
];

/* ─────────────────────────────────────────────
   TAREAS ENTREGABLES
   El enlace al archivo HTML se genera
   automáticamente como: tareas/{id}/index.html
   ───────────────────────────────────────────── */
const TAREAS = [
  // Agrega aquí tus tareas cuando las tengas
];
