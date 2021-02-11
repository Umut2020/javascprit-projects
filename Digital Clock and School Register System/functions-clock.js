function clickEventHandler () {
  let currentTime = new Date(new Date().toLocaleString('ch-DE', {timeZone: timezone}))
  let hours = currentTime.getHours()
  let minutes = currentTime.getMinutes()
  let seconds = currentTime.getSeconds()

  let html = createTableHour(hours, minutes, seconds)
  document.querySelector('#saat-ekrani').innerHTML = html
}

function createTableHour (pHours, pMinutes, pSeconds) {
  let htmlFragment = `
              <p>${timezone}</p>
             <span id="saat" >
                      ${String(pHours).padStart(2, '0')}: 
                      ${String(pMinutes).padStart(2, '0')}: 
                      ${String(pSeconds).padStart(2, '0')}
              </span>
          `
  return htmlFragment
}
