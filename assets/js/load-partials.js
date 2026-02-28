function getBasePath() {
  const path = window.location.pathname
    .split("/")
    .filter(p => p.length > 0);

  let depth = path.length - 1;
  let base = "";

  for (let i = 0; i < depth; i++) {
    base += "../";
  }

  return base;
}

function fixLinks(container, base) {

  container.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");

    if (
      href &&
      !href.startsWith("http") &&
      !href.startsWith("#") &&
      !href.startsWith("mailto")
    ) {
      link.setAttribute("href", base + href);
    }
  });

  container.querySelectorAll("img[src], source[src], audio[src]").forEach(el => {
    const src = el.getAttribute("src");

    if (
      src &&
      !src.startsWith("http")
    ) {
      el.setAttribute("src", base + src);
    }
  });
}

function loadPartial(id, file, callback) {

  const base = getBasePath();
  const url = base + "partials/" + file;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("No se pudo cargar " + url);
      return res.text();
    })
    .then(html => {

      const el = document.getElementById(id);
      if (!el) return;

      el.innerHTML = html;

      fixLinks(el, base);

      if (callback) callback();
    })
    .catch(err => console.error(err));
}

loadPartial("header", "header.html");
loadPartial("menu", "menu.html");
loadPartial("carousel", "carousel.html");

loadPartial("footer", "footer.html", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});