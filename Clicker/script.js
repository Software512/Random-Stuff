console.log("Whatever you do, please don't cheat.");
let money = 0;
let mpc = 1;
let mps = 0;
if (document.cookie.indexOf("save=")>=0) {
  let cookie = document.cookie.split("save=")[1];
  let save = cookie.split("|");
  money = Number(save[0]);
  mpc = Number(save[1]);
  mps = Number(save[2]);
  document.getElementById("money").innerHTML = "Money: $" + money;
  document.getElementById("mpc").innerHTML = "Money Per Click: $" + mpc;
  document.getElementById("mps").innerHTML = "Money Per Second: $" + mps;
  document.getElementById("pageTitle").innerHTML = "$" + money + " - Clicker v1.1.7";
}
const sound = document.getElementById("sound");
setInterval("autoclick()", 1000);
function Clicked() {
  sound.play();
  money += mpc;
  document.getElementById("money").innerHTML = "Money: $" + money
  document.getElementById("pageTitle").innerHTML = "$" + money + " - Clicker v1.1.7";
}
function addcpc(value, cost) {
  if (money >= cost) {
    mpc += value;
    money -= cost;
    document.getElementById("mpc").innerHTML = "Money Per Click: $" + mpc;
    document.getElementById("money").innerHTML = "Money: $" + money;
  } else {
    alert("Not enough money; you need $" + (cost - money) + " more.");
  }
}
function addcps(value, cost) {
  if (money >= cost) {
    mps += value;
    money -= cost;
    document.getElementById("mps").innerHTML = "Money Per Second: $" + mps;
    document.getElementById("money").innerHTML = "Money: $" + money;
  } else {
    alert("Not enough money; you need $" + (cost - money) + " more.");
  }
}
function autoclick() {
  money += mps;
  document.getElementById("money").innerHTML = "Money: $" + money;
  document.getElementById("pageTitle").innerHTML = "$" + money + " - Clicker v1.1.7";
}
function loadGame() {
  let save = prompt("Enter in your save here.").split("|");
  if (save != null && save != "" && save.length == 3) {
    money = Number(save[0]);
    mpc = Number(save[1]);
    mps = Number(save[2]);
    document.getElementById("money").innerHTML = "Money: $" + money;
    document.getElementById("mpc").innerHTML = "Money Per Click: $" + mpc;
    document.getElementById("mps").innerHTML = "Money Per Second: $" + mps;
    document.getElementById("pageTitle").innerHTML = "$" + money + " - Clicker v1.1.7";
  }
}

function saveGame() {
  document.cookie = "save=" + money + "|" + mpc + "|" + mps;
}

function wipeSave() {
  if (confirm("Are you sure you want to wipe your save?")){
    document.cookie = "save=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    money = 0;
    mpc = 1;
    mps = 0;
    document.getElementById("money").innerHTML = "Money: $" + money;
    document.getElementById("mpc").innerHTML = "Money Per Click: $" + mpc;
    document.getElementById("mps").innerHTML = "Money Per Second: $" + mps;
    document.getElementById("pageTitle").innerHTML = "$" + money + " - Clicker v1.1.7";
  }
}