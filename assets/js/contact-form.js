document.addEventListener("submit", async (e) => {
  const form = e.target;

  if (!form.matches("#contactForm")) return;

  e.preventDefault();
  console.log("Submit interceptado ✅");

  const toast = document.getElementById("form-toast");

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      form.reset();
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 3000);
    }
  } catch (error) {
    console.error("Error enviando formulario", error);
  }
}, true); // 👈 ESTO ES LO QUE FALTABA
