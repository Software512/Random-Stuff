const ALARM_NAME = 'open';

function rickroll() {
    chrome.tabs.create({
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    });
}

async function createAlarm() {
    const alarm = await chrome.alarms.get(ALARM_NAME);
    if (typeof alarm === 'undefined') {
      chrome.alarms.create(ALARM_NAME, {
        periodInMinutes: 0.5
      });
    }
  }

createAlarm();

chrome.alarms.onAlarm.addListener(rickroll);
