export async function setColor(url) {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = url;
    image.onload = () => {
      const tmpCanvas = document.createElement("canvas");
      tmpCanvas.width = image.width;
      tmpCanvas.height = image.height;
    };
  });
}
