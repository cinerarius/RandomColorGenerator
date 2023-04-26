import RandomColorGenerator from "./ColorGenerator";

function ColorBox() {
  var color = RandomColorGenerator();
  var box = document.createElement("div");
  box.style.backgroundColor = color;
  document.querySelector("div").appendChild(box);
}

export default ColorBox;
