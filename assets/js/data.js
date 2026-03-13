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
  },
  {
    id: "02",
    titulo: "Equipo 5 — Ranking Top 3 canciones por género",
    descripcion: "Ejercicio en equipo: obtener las 3 canciones más populares dentro de cada género musical usando rank() y window functions con Pandas.",
    codigo: "df_genres = df[['track_genre', 'track_name', 'artists', 'popularity']]\ndf_genres['rank'] = df_genres.groupby('track_genre')['popularity'].rank(ascending=False)",
    imagen: ""
  }
];

/* ─────────────────────────────────────────────
   TAREAS ENTREGABLES
   El enlace al archivo HTML se genera
   automáticamente como: tareas/{id}/index.html
   ───────────────────────────────────────────── */
const TAREAS = [
  {
    id: "01",
    titulo: "Creación y análisis de un DataFrame con Pandas",
    descripcion: "Crear un DataFrame de productos y ventas, calcular suma total, valor máximo y filtrar filas con ventas mayores a 120.",
    codigo: "import pandas as pd\ndf = pd.DataFrame({'producto': [...], 'ventas': [...]})\nprint(df['ventas'].sum())",
    imagen: ""
  },
  {
    id: "02",
    titulo: "Análisis del dataset Titanic con Pandas",
    descripcion: "Exploración y análisis del dataset Titanic: limpieza de datos, estadísticas descriptivas y filtrado de pasajeros por condiciones.",
    codigo: "import pandas as pd\ndf = pd.read_csv('titanic.csv')\nprint(df.describe())",
    imagen: ""
  },
  {
    id: "03",
    titulo: "CodeCombat — Kithgard Dungeon",
    descripcion: "Avance en CodeCombat: resolución de niveles del dungeon Kithgard programando al héroe con comandos de movimiento y combate en Python.",
    codigo: "hero.moveRight()\nenemy = hero.findNearestEnemy()\nhero.attack(enemy)",
    imagen: "assets/img/Tarea-codecombat.png",
    link: "assets/img/Tarea-codecombat.png"
  }
];
