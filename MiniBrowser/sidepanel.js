const browser = document.getElementById("browser");
const go = document.getElementById("go");
let site;
go.addEventListener("click", updatePage);
window.addEventListener('resize', resizeIframe);
function updatePage() {
    site = document.getElementById("addressBar").value;
    browser.src = site;
}
function resizeIframe() {
    console.log(browser.clientWidth);
    browser.height = browser.clientWidth * 9 / 16;
}