let i
let idk;
const Sound = document.getElementById("Dice_Rolling");
function Roll() {
  Sound.play();
  changeImage();
}
function changeImage() {
  idk = "Dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
  document.getElementById("Dice").src = idk;
}