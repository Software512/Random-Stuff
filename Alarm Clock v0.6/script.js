let alarm = getCookie("alarm");
let repeatBeep;
const noise = document.getElementById("beep");
updateTime();
setInterval(updateTime, 1000);
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function updateTime() {
  const date = new Date();
  time = date.toLocaleTimeString();
  if (time.length == 10) {
    time = "0" + time;
  }
  if (alarm == time) {
    repeatBeep = setInterval(beep, 3000);
  }
  document.getElementById("time").innerHTML = time;
}
function setAlarm() {
  alarm = prompt("What time?", time);
  document.cookie = "alarm=" + alarm;
}
function stopAlarm() {
  clearInterval(repeatBeep);
  noise.load();
}
function beep() {
  noise.play();
}