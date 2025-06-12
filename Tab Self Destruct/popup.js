const tabs = await chrome.tabs.query({active: true, lastFocusedWindow: true});
document.getElementById("self_destruct").addEventListener("click", selfDestruct);
function selfDestruct() {
    const hour = document.getElementById("hour").value;
    const minute = document.getElementById("minute").value;
    const second = document.getElementById("second").value;
    const time = ((hour*3600)+(minute*60)+second)*1000;
    setTimeout(closeTab,time);
}
function closeTab() {
    chrome.tabs.remove(tabs[0].id);
}