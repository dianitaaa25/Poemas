const bioImg = document.querySelector(".bio-foto img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (bioImg) {
  bioImg.addEventListener("click", () => {
    lightboxImg.src = bioImg.src;
    lightbox.classList.add("show");
  });
}

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.remove("show");
  }
});
