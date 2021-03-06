import { Visual } from "./visual.js";
import { setColor } from "./color.js";
import { Text } from "./text.js";
class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    WebFont.load({
      google: {
        families: ["Hind:700"],
      },
      fontactive: () => {
        const ul = document.getElementsByTagName("ul")[0];
        const lis = ul.getElementsByTagName("li");
        for (let i = 0; i < lis.length; i++) {
          const item = lis[i];
          const img = item.getElementsByTagName("img")[0];
          item.addEventListener(
            "click",
            (e) => {
              this.show(i);
            },
            false
          );
          this.thumbs[i] = {
            item,
            img: img.src,
          };
        }

        this.text = new Text();

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();
      },
    });
  }
}

window.onload = () => {
  new App();
};
