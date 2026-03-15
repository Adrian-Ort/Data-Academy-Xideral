/**
 * render.js — Generador automático de tarjetas
 * ==============================================
 * Lee los arrays EJERCICIOS y TAREAS de data.js
 * y los convierte en tarjetas HTML.
 *
 * NO necesitas editar este archivo para agregar contenido.
 * Solo edita data.js.
 */

/**
 * Escapa caracteres HTML para mostrar código
 * de forma segura dentro de la tarjeta.
 */
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Genera la tarjeta HTML de un ejercicio.
 *
 * El enlace apunta a: ejercicios/{id}/index.html
 * → Coloca tu export de Jupyter en esa ruta.
 *
 * @param {Object} ej    - Objeto del array EJERCICIOS
 * @param {number} index - Índice para el delay de animación
 */
function renderEjercicioCard(ej, index) {
  const archivoUrl  = `ejercicios/${ej.id}/index.html`;
  const delayClass  = `reveal-d${(index % 3) + 1}`;

  // Imagen de preview (solo si el campo no está vacío)
  const imagenHtml = ej.imagen
    ? `<img src="${ej.imagen}" alt="${ej.titulo}" class="card-preview-img">`
    : "";

  return `
    <div class="col-md-6 col-lg-4 reveal ${delayClass}">
      <div class="card accent-cyan">
        ${imagenHtml}
        <div class="card-num">${String(ej.id).padStart(2, "0")}</div>
        <h3>${ej.titulo}</h3>
        <p>${ej.descripcion}</p>
        <pre class="card-code"><code>${escapeHtml(ej.codigo)}</code></pre>
        <div class="card-spacer"></div>
        <a href="${archivoUrl}" target="_blank" class="card-action link-cyan">
          Abrir ejercicio <i class="bi bi-box-arrow-up-right"></i>
        </a>
      </div>
    </div>`;
}

/**
 * Genera la tarjeta HTML de una tarea.
 *
 * El enlace apunta a: tareas/{id}/index.html
 * → Coloca tu export de Jupyter en esa ruta.
 *
 * @param {Object} tarea - Objeto del array TAREAS
 * @param {number} index - Índice para el delay de animación
 */
function renderTareaCard(tarea, index) {
  const archivoUrl  = tarea.link !== undefined ? tarea.link : `tareas/${tarea.id}/index.html`;
  const delayClass  = `reveal-d${(index % 3) + 1}`;

  const imagenHtml = tarea.imagen
    ? `<img src="${tarea.imagen}" alt="${tarea.titulo}" class="card-preview-img">`
    : "";

  const esImagen = archivoUrl && /\.(png|jpg|jpeg|gif|webp)$/i.test(archivoUrl);
  const accionHtml = archivoUrl
    ? esImagen
      ? `<button data-lightbox="${archivoUrl}" class="card-action link-magenta">
          Abrir tarea <i class="bi bi-box-arrow-up-right"></i>
        </button>`
      : `<a href="${archivoUrl}" target="_blank" class="card-action link-magenta">
          Abrir tarea <i class="bi bi-box-arrow-up-right"></i>
        </a>`
    : "";

  return `
    <div class="col-md-6 reveal ${delayClass}">
      <div class="card accent-magenta">
        ${imagenHtml}
        <div class="card-num">T${String(tarea.id).padStart(2, "0")}</div>
        <h3>${tarea.titulo}</h3>
        <p>${tarea.descripcion}</p>
        <pre class="card-code"><code>${escapeHtml(tarea.codigo)}</code></pre>
        <div class="card-spacer"></div>
        ${accionHtml}
      </div>
    </div>`;
}

/**
 * Genera la tarjeta HTML de una certificación.
 *
 * @param {Object} cert  - Objeto del array CERTIFICACIONES
 * @param {number} index - Índice para el delay de animación
 */
function renderCertificacionCard(cert, index) {
  const delayClass = `reveal-d${(index % 3) + 1}`;

  return `
    <div class="col-md-6 col-lg-4 reveal ${delayClass}">
      <div class="card accent-electric">
        <button data-lightbox="${cert.imagen}" class="cert-img-btn">
          <img src="${cert.imagen}" alt="${cert.titulo}" class="card-cert-img">
        </button>
        <div class="card-num">C${String(cert.id).padStart(2, "0")}</div>
        <h3>${cert.titulo}</h3>
        <p>${cert.descripcion}</p>
        <div class="cert-fecha"><i class="bi bi-calendar3"></i> ${cert.fecha}</div>
        <div class="card-spacer"></div>
        <button data-lightbox="${cert.imagen}" class="card-action link-electric">
          Ver certificado <i class="bi bi-box-arrow-up-right"></i>
        </button>
      </div>
    </div>`;
}

/**
 * Muestra un mensaje cuando la sección está vacía.
 */
function renderEmptyState(iconClass, mensaje) {
  return `
    <div class="col-12 reveal reveal-d1">
      <div class="empty-state">
        <i class="bi ${iconClass}"></i>
        <p>${mensaje}</p>
      </div>
    </div>`;
}

/**
 * Punto de entrada: inyecta todas las tarjetas en el DOM.
 * Se ejecuta cuando el HTML está listo.
 */
document.addEventListener("DOMContentLoaded", () => {
  const ejGrid     = document.getElementById("ejercicios-grid");
  const tareasGrid = document.getElementById("tareas-grid");
  const certsGrid  = document.getElementById("certificaciones-grid");

  // Renderizar ejercicios
  if (ejGrid) {
    ejGrid.innerHTML = EJERCICIOS.length
      ? EJERCICIOS.map((ej, i) => renderEjercicioCard(ej, i)).join("")
      : renderEmptyState("bi-code-slash", "Próximamente se agregarán los ejercicios realizados en clase.");
  }

  // Renderizar tareas
  if (tareasGrid) {
    tareasGrid.innerHTML = TAREAS.length
      ? TAREAS.map((tarea, i) => renderTareaCard(tarea, i)).join("")
      : renderEmptyState("bi-journal-text", "Próximamente se agregarán las tareas entregadas.");
  }

  // Renderizar certificaciones
  if (certsGrid) {
    certsGrid.innerHTML = CERTIFICACIONES.length
      ? CERTIFICACIONES.map((cert, i) => renderCertificacionCard(cert, i)).join("")
      : renderEmptyState("bi-award", "Próximamente se agregarán las certificaciones obtenidas.");
  }
});
