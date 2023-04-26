function RandomColorGenerator() {
  var code = "abcdef1234567890";
  var colorCodeLength = 6;
  var colorCode = "";
  var randomColorCode = "";
  for (var i = 0; i < colorCodeLength; i++) {
    randomColorCode = Math.floor(Math.random() * colorCodeLength);
    colorCode += code.substring(randomColorCode, randomColorCode + 1);
  }
  return "#" + colorCode;
}

export default RandomColorGenerator;
