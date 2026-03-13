/**
 * main.js — Interacciones de la interfaz
 * ========================================
 * Maneja: scroll de navbar, reveal on scroll,
 * nav link activo por sección y cierre del menú móvil.
 *
 * Este archivo NO toca el contenido (ejercicios/tareas).
 * Para eso está render.js.
 */

document.addEventListener("DOMContentLoaded", () => {
  const navbar   = document.querySelector(".navbar");
  const collapse = document.querySelector(".navbar-collapse");
  const navLinks = document.querySelectorAll(".nav-link");

  /* ── Sombra en navbar al hacer scroll ─────── */
  window.addEventListener("scroll", () => {
    navbar?.classList.toggle("scrolled", window.scrollY > 50);
  }, { passive: true });

  /* ── Reveal on scroll ────────────────────────
     Se usa un pequeño delay (setTimeout 0) para
     asegurarse de que render.js ya inyectó las
     tarjetas antes de que el observer las busque. */
  setTimeout(() => {
    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target); // observar solo una vez
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    reveals.forEach((el) => revealObserver.observe(el));
  }, 0);

  /* ── Nav link activo según sección visible ── */
  const mainSections = ["inicio", "sobre-mi", "ejercicios", "tareas", "proyecto-final"];

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (mainSections.includes(id)) {
            navLinks.forEach((link) => {
              link.classList.toggle("active", link.getAttribute("href") === "#" + id);
            });
          }
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll("section[id]").forEach((s) => sectionObserver.observe(s));

  /* ── Cierre del menú hamburguesa en móvil ─── */
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (collapse?.classList.contains("show")) {
        new bootstrap.Collapse(collapse).hide();
      }
    });
  });
});

/* ── Lightbox ─────────────────────────────────── */
const lightbox    = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-lightbox]");
  if (trigger) {
    lightboxImg.src = trigger.dataset.lightbox;
    lightbox.classList.add("active");
  }
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("active");
});
