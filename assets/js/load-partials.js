function loadPartial(id, file, callback) {
  const base = window.location.origin;
  const path = `/partials/${file}`;
  const url = base + path;

  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback(); // ejecuta código después de cargar
    })
    .catch(err => console.error(`Error cargando ${url}`, err));
}

// Llamadas a los partials
loadPartial("header", "header.html");
loadPartial("menu", "menu.html");

// Footer con callback para actualizar el año
loadPartial("footer", "footer.html", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});
