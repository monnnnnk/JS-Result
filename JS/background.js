const colors = ["#d0e1f5", "#c0e4da", "#fee893", "#fac8bf", "#fedcc1"];

function colorChange() {
  const changeColors = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[changeColors];
}
setInterval(colorChange, 5000);
