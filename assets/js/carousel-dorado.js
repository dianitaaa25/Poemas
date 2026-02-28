document.querySelectorAll(".carousel-dorado").forEach(carousel => {
  const track = carousel.querySelector(".carousel-track");
  const items = carousel.querySelectorAll(".car-item");
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");

  let index = 0;
  const itemWidth = items[0].offsetWidth + 24;

  next.addEventListener("click", () => {
    if (index < items.length - 1) {
      index++;
      track.style.transform = `translateX(-${index * itemWidth}px)`;
    }
  });

  prev.addEventListener("click", () => {
    if (index > 0) {
      index--;
      track.style.transform = `translateX(-${index * itemWidth}px)`;
    }
  });
});
