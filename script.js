// Bouton jouer
// Bouton rejouer
// Affichage score
// Spawn des points

var corps = [];
corps[0] = [50,50];

var canvas = document.getElementById('canvas');
if (canvas.getContext) var context = canvas.getContext('2d');

var dir = 0;
var play = 1;

canvas.width  = document.body.clientWidth;
canvas.height = document.body.clientHeight;
canvas.style.width  =  canvas.width*2;
canvas.style.height = canvas.height*2;

function fillCircle(x, y,color) {
  context.beginPath();
  context.fillStyle=color;
  context.arc(x, y, 10, 0, 2 * Math.PI);
  context.fill();
  context.closePath();
}

function resize() {
  canvas.width  = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  canvas.style.width  =  canvas.width*2;
  canvas.style.height = canvas.height*2;
}

function addCircle() {
  var rndAdd = 0;
  if (corps.length == 1) {
    switch (dir) {
      case 0:
        corps[corps.length] = [corps[corps.length-1][0]-20, corps[corps.length-1][1]];
        break;
      case 1:
        corps[corps.length] = [corps[corps.length-1][0]+20, corps[corps.length-1][1]];
        break;
      case 2:
        corps[corps.length] = [corps[corps.length-1][0], corps[corps.length-1][1]-20];
        break;
      case 3:
        corps[corps.length] = [corps[corps.length-1][0], corps[corps.length-1][1]+20];
        break;
    }

  } else {
    corps[corps.length] = [corps[corps.length-1][0] - corps[corps.length-2][0] + corps[corps.length-1][0],corps[corps.length-1][1] - corps[corps.length-2][1] + corps[corps.length-1][1]];
  }
}

function boucle() {
  if (play) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = corps.length-1; i > 0; i--){
      fillCircle(corps[i][0],corps[i][1],"green");
      corps[i] = [corps[i-1][0],corps[i-1][1]];
    }

    fillCircle(corps[0][0],corps[0][1],"green");
    switch (dir) {
      case 0:
        corps[0] = [corps[0][0]+20,corps[0][1]];
        break;
      case 1:
        corps[0] = [corps[0][0]-20,corps[0][1]];
        break;
      case 2:
        corps[0] = [corps[0][0],corps[0][1]+20];
        break;
      case 3:
        corps[0] = [corps[0][0],corps[0][1]-20];
        break;
    }

    if ((corps[0][0] <= 0 || corps[0][0] >= window.innerWidth) || (corps[0][1] <= 0 ||corps[0][1] >= window.innerHeight)) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      play = 0;
      console.log('Perdu !');
    }
  }
}

function rejouer() {
  corps = [];
  corps[0] = [50,50];
  play = 1;
}

function launch() {
  setInterval(boucle, 250);
  window.onresize = resize;
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
      if (dir != 0) dir = 1;
    } else if(event.keyCode == 38) {
      if (dir != 2) dir = 3;
    } else if(event.keyCode == 39) {
      if (dir != 1) dir = 0;
    } else if(event.keyCode == 40) {
      if (dir != 3) dir = 2;
    }
});
