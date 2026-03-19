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
  },
  {
    id: "03",
    titulo: "Función Lambda en AWS",
    descripcion: "Ejercicio de AWS Lambda: creación y ejecución de una función serverless en Python que procesa eventos y retorna respuestas HTTP desde la consola de AWS.",
    codigo: "def lambda_handler(event, context):\n    return {\n        'statusCode': 200,\n        'body': 'Hello from Lambda!'\n    }",
    imagen: "assets/img/lambda.png",
    link: "assets/img/lambda.png"
  },
  {
    id: "04",
    titulo: "Análisis del Dataset Netflix con PySpark",
    descripcion: "Exploración del dataset netflix_titles.csv usando PySpark: carga de datos, inspección del esquema, filtrado por tipo de contenido y análisis con SparkSession.",
    codigo: "from pyspark.sql import SparkSession\nspark = SparkSession.builder.appName(\"NetflixSpark\").getOrCreate()\ndf = spark.read.csv(\"netflix_titles.csv\", header=True)\ndf.filter(col(\"type\") == \"Movie\").show()",
    imagen: ""
  },
  {
    id: "05",
    titulo: "Consultas SQL sobre Base de Datos Universitaria",
    descripcion: "Consultas SQL con SQLite: número de cursos por departamento, GPA promedio de estudiantes, inscripciones por profesor, estudiantes sin inscripciones y departamento con mayor promedio de inscripciones.",
    codigo: "SELECT d.name, COUNT(c.course_id) AS num_courses\nFROM departments d\nJOIN courses c ON d.dept_id = c.dept_id\nGROUP BY d.name\nORDER BY num_courses DESC",
    imagen: ""
  }
];

/* ─────────────────────────────────────────────
   CERTIFICACIONES AWS
   ───────────────────────────────────────────── */
const CERTIFICACIONES = [
  {
    id: "01",
    titulo: "AWS Cloud Practitioner Essentials",
    descripcion: "Cubre los conceptos esenciales de la nube: infraestructura global de AWS, servicios principales como EC2, S3 y RDS, modelo de seguridad compartida, arquitectura bien diseñada y estructura de precios.",
    imagen: "assets/img/AWS-Cloud-Practitioner.png",
    fecha: "15 de marzo, 2026"
  },
  {
    id: "02",
    titulo: "Getting into the Serverless Mindset",
    descripcion: "Introducción al paradigma serverless: beneficios, casos de uso y diseño de aplicaciones sin servidor con AWS Lambda y API Gateway para construir arquitecturas event-driven escalables.",
    imagen: "assets/img/AWS-Serverless-Mindset.png",
    fecha: "15 de marzo, 2026"
  },
  {
    id: "03",
    titulo: "Data Engineering on AWS - Foundations",
    descripcion: "Fundamentos de ingeniería de datos en la nube: pipelines de datos, ingesta, transformación y almacenamiento con servicios AWS como S3, Glue, Athena y Amazon Redshift.",
    imagen: "assets/img/AWS-Data-Engineering.png",
    fecha: "15 de marzo, 2026"
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
  },
  {
    id: "04",
    titulo: "App de Limpieza de Datos con Streamlit",
    descripcion: "Crear una app en Streamlit con Python que permita subir un archivo CSV, eliminar los valores nulos y las filas duplicadas, y mostrar una visualización del antes y después de la limpieza de datos.",
    codigo: "import streamlit as st\nimport pandas as pd\n\ndf = pd.read_csv(uploaded_file)\ndf_clean = df.dropna().drop_duplicates()",
    imagen: "assets/img/Tarea-APP-duplicados-nulos.png",
    link: "assets/img/Tarea-APP-duplicados-nulos.png"
  }
];
