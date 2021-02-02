let timezone = ''; // Europe/Zurich, America/New_York

setInterval(function () {
  clickEventHandler()
}, 1000)

document.querySelector('#select-box').addEventListener('change', function (pEvent) {
  timezone = pEvent.target.value
})
