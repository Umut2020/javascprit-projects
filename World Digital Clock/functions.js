function zurichSaatiniGoster () {
  let mevcutZaman = new Date()
  let saat = mevcutZaman.getHours()
  let dakika = mevcutZaman.getMinutes()
  let saniye = mevcutZaman.getSeconds()

  if (saniye < 10) {saniye = '0' + saniye }
  let sehir = 'Zurich'
  saatKutusuElementi.innerHTML = `<div id="saat"> ${saat}: ${dakika} : ${saniye} ==> ${sehir}</div>`
}

function tokyoSaatiniGoster () {
  let mevcutZaman = new Date()
  mevcutZaman.setHours(mevcutZaman.getHours() + 8)
  let saat = mevcutZaman.getHours()
  let dakika = mevcutZaman.getMinutes()
  let saniye = mevcutZaman.getSeconds()

  if (saniye < 10) {saniye = '0' + saniye }
  let sehir = 'Tokyo'
  saatKutusuElementi.innerHTML = `<div id="saat"> ${saat}: ${dakika} : ${saniye} ==> ${sehir}</div>`
}

function newYorkSaatiniGoster () {
  let mevcutZaman = new Date()
  mevcutZaman.setHours(mevcutZaman.getHours() - 6)
  let saat = mevcutZaman.getHours()
  let dakika = mevcutZaman.getMinutes()
  let saniye = mevcutZaman.getSeconds()

  if (saniye < 10) {saniye = '0' + saniye }
  let sehir = 'New York'
  saatKutusuElementi.innerHTML = `<div id="saat"> ${saat}: ${dakika} : ${saniye} ==> ${sehir}</div>`
}

let setZurich = setInterval(zurichSaatiniGoster, 1000)
let setTokyo = setInterval(tokyoSaatiniGoster, 1000)
let setNewYork = setInterval(newYorkSaatiniGoster, 1000)

function newYorkCalistirma () {
  dropdownElementi.addEventListener('click' , function (e) {
    let clickedElement = e.target.id
    if (clickedElement === 'newyork') {
      setInterval(newYorkSaatiniGoster, 1000)
      clearInterval(setZurich)
      clearInterval(setTokyo)
    }
  })
}

function tokyoCalistirma () {
  dropdownElementi.addEventListener('click' , function (e) {
    let clickedElement = e.target.id
    if (clickedElement === 'tokyo') {
      setInterval(tokyoSaatiniGoster, 1000)
      clearInterval(setZurich)
      clearInterval(setNewYork)
    }
  })
}
function zurichCalistirma () {
  dropdownElementi.addEventListener('click' , function (e) {
    let clickedElement = e.target.id
    if (clickedElement === 'zurich') {
      setInterval(zurichSaatiniGoster, 1000)
      clearInterval(setNewYork)
      clearInterval(setTokyo)
    }
  })
}
