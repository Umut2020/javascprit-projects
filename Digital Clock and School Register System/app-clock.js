let timezone = 'bos'; // Europe/Zurich, America/New_York

setInterval(function () {
  if (timezone != 'bos') {clickEventHandler()}
}, 1000)

document.querySelector('#select-box').addEventListener('change', function (pEvent) {
  timezone = pEvent.target.value
})
