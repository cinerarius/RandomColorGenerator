function GenerateColor() {
  for (i = 0; i <= 5; i++) {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var color = document.createElement("h1");
    color.textContent = `RGB(${red},${blue},${green})`;
    color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.body.appendChild(color);
  }
}

GenerateColor();
