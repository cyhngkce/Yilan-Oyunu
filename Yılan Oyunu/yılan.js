var CanvasContext;
var Canvas;
window.onload = function () {
  Canvas = document.getElementById("cnvs");
  CanvasContext = Canvas.getContext("2d");
  document.addEventListener("keydown", tuşlar);
  setInterval(yılan, 1000 / 15);
};
var boyut = 20;
var xv = (yv = 0);
var yılx = (yıly = 10);
var elmax = (elmay = 15);
var yol = [];
var uzunluk = 5;

function yılan() {
  yılx += xv;
  yıly += yv;
  if (yılx < 0) {
    yılx = boyut - 1;
  }
  if (yılx > boyut - 1) {
    yılx = 0;
  }
  if (yıly < 0) {
    yıly = boyut - 1;
  }
  if (yıly > boyut - 1) {
    yıly = 0;
  }
  CanvasContext.fillStyle = "black";
  CanvasContext.fillRect(0, 0, Canvas.width, Canvas.height);

  CanvasContext.fillStyle = "lime";
  for (var i = 0; i < yol.length; i++) {
    CanvasContext.fillRect(
      yol[i].x * boyut,
      yol[i].y * boyut,
      boyut - 2,
      boyut - 2
    );
    if (yol[i].x == yılx && yol[i].y == yıly) {
      uzunluk = 5;
    }
  }
  yol.push({ x: yılx, y: yıly });
  while (yol.length > uzunluk) {
    yol.shift();
  }
  CanvasContext.fillStyle = "red";
  CanvasContext.fillRect(elmax * boyut, elmay * boyut, boyut - 2, boyut - 2);
  if (elmax == yılx && elmay == yıly) {
    uzunluk++;
    elmax = Math.floor(Math.random() * boyut);
    elmay = Math.floor(Math.random() * boyut);
  }
}
function tuşlar(e) {
  if (e.keyCode == 38) {
    xv = 0;
    yv = -1;
  }
  if (e.keyCode == 37) {
    xv = -1;
    yv = 0;
  }
  if (e.keyCode == 40) {
    xv = 0;
    yv = 1;
  }
  if (e.keyCode == 39) {
    xv = 1;
    yv = 0;
  }
}
