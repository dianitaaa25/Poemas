document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener("submit", async (e) => {
    const form = e.target;

    if (!form.matches("#contactForm")) return;

    e.preventDefault();
    console.log("Submit interceptado ✅");

    const toast = document.getElementById("form-toast");
    const sound = document.getElementById("messageSound");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (response.ok) {

        // Reset formulario
        form.reset();

        // Mostrar mensaje
        toast.classList.add("show");

        // 🔊 Reproducir sonido
        if (sound) {
          sound.currentTime = 0;
          sound.play().catch(() => {});
        }

        // Ocultar mensaje después de 3s
        setTimeout(() => {
          toast.classList.remove("show");
        }, 3000);
      }

    } catch (error) {
      console.error("Error enviando formulario", error);
    }

  }, true); // 👈 Capturing activado

});
