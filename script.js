// setInterval("boucle", 500);

var score = 0;
var corps = [];

corps[0] = [0,0];
var canvas = document.getElementById('canvas');
if (canvas.getContext) var context = canvas.getContext('2d');

canvas.width  = '100%';
canvas.height = '100%';
canvas.style.width  =  canvas.width*2;
canvas.style.height = canvas.height*2;

fillCircle();


function fillCircle() {
  context.beginPath();
  context.fillStyle="green";
  context.arc(5, 5, 500, 0, 2 * Math.PI);
  context.fill();
}

function boucle() {
}
