# Data Academy Xideral — Portafolio

Portafolio del curso de Data Engineering de Xideral. Incluye los ejercicios en clase, tareas entregables, certificaciones y el proyecto final.

Desplegado en GitHub Pages: https://adrian-ort.github.io/Data-Academy-Xideral

---

## Proyecto final

**NYC Yellow Taxi — Data Pipeline**

Pipeline end-to-end que procesa los datos de viajes del NYC TLC y los visualiza en un dashboard con Streamlit. Todo corre en AWS: los archivos parquet llegan a S3, una Lambda detecta cada nuevo archivo y dispara el procesamiento con PySpark en una EC2. El dashboard se despliega automáticamente vía GitHub Actions cada vez que hay un push a main.

Tecnologías: Python 3.12, PySpark 3.5, AWS S3, Lambda, EC2, Streamlit, Docker, GitHub Actions.

---

## Estructura

```
index.html
assets/
  css/
  js/           <- data.js es el único archivo que se edita para agregar contenido
  img/
ejercicios/     <- exports HTML de Jupyter Notebook
tareas/         <- exports HTML de Jupyter Notebook
```

---

Miguel Adrian Ortega Herrera · 2026
