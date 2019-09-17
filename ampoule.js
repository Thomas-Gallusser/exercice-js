// var status = 0;

// function changeStatus() {
//   if (!status) {
//     status = 1;
//     document.getElementById("btn").innerText = "Turn off";
//     document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulbon.gif'
//   } else {
//     status = 0;
//     document.getElementById("btn").innerText = "Turn on";
//     document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif'
//   }
// }

var monImage = document.getElementById('myImage');
var monBtn = document.getElementById('btn');

function changeStatus() {
  if (monImage.src == "https://www.w3schools.com/js/pic_bulboff.gif") {
    monBtn.innerText = "Turn off";
    monBtn.src='https://www.w3schools.com/js/pic_bulbon.gif'
  } else {
    monBtn.innerText = "Turn on";
    monBtn.src='https://www.w3schools.com/js/pic_bulboff.gif'
  }
}
