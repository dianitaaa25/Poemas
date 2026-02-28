document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");

  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      // Selecciona el site-wrapper completo
      const siteWrapper = document.querySelector(".site-wrapper");

      if (siteWrapper) siteWrapper.classList.add("magic-opening");

      // Después de la animación, redirige
      setTimeout(() => {
        window.location.href = "pages/biografia.html";
      }, 900);
    });
  }
});
