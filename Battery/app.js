const doldurButonu = document.getElementById('doldur')
const bosaltButonu = document.getElementById('bosalt')
const gosterge = document.getElementById('gosterge')
const alt = document.querySelector('#alt')
const ust = document.querySelector('#ust')
const orta = document.querySelector('#orta')

let sayac = 0

doldurButonu.addEventListener('click' , function () {
  sayac++
})

doldurButonu.addEventListener('click' , gostergeEkraniDuzenleyici)

bosaltButonu.addEventListener('click' , function () {
  sayac--
})

bosaltButonu.addEventListener('click' , gostergeEkraniDuzenleyici)
