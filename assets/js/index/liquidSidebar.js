document.addEventListener("DOMContentLoaded", () => {

  const canvas = document.getElementById("sidebarCanvas");
  const img = document.getElementById("sidebarImage");

  if (!canvas || !img) return;

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }

  function drawImageCover() {
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.naturalWidth / img.naturalHeight;

    let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }

  function render() {
    resizeCanvas();
    drawImageCover();
  }

  window.addEventListener("resize", render);

  if (img.complete && img.naturalWidth !== 0) {
    render();
  } else {
    img.addEventListener("load", render);
  }

});
