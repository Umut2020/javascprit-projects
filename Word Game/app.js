/**
 * Müsteri bizden parcalara ayrilmis kelimelerin birlestirilmeye calisildigi bir oyun yapmamizi istiyor.
 * Parcalara ayrilmis kelimelerin dogru sekilde birlestirilmesi durumunda ekrana dogru bilgisi yanlis birlestirildiginde 
 * yanlis bilgisi verilmesi gerekiyor. Bu kontroller "Check" butonu ile yapilmali ve Random butonu ile de yeni kelimeler
 * ekrana gelmeli
 *
 * 1) Sayfa üzeride bir HTML yapisi olusturulacak.
 *    Style icin CSS kullanilabilir
 * 2) Hazir kelime datalari multidimensionel array icersinde tutulacak
 * 3) Random butonuna basildiginda 
 *  -Kelime datamizdan rastgele bir kelime hece gurubunu cagiran fonksiyonlar yazilacak
 *  -Gelen hecelerin siralanabilmesi icin drap-and-drop api kullanilarak hecelerin yerlerinin degistirlmesi saglanacak
 *  -son olarak Check butonuna basildiginda siralamanin dogrulugunu kontrol edecek check fonksiyonu olusturulacak
 **/

let dragSourceLocal = null
let randomSayi = 1

const kelimeler = document.querySelectorAll('.container .box')
const checkButtonElement = document.getElementById('random-check')
const randomButtonElement = document.getElementById('random-btn')

let box1Element = document.getElementById('first-box')
let box2Element = document.getElementById('second-box')
let box3Element = document.getElementById('third-box')

const heceGruplari = [ ['KIR', 'RIL' , 'MAK'] , ['DE', 'GI', 'SIM'], ['OTO', 'MO' , 'BIL'] ,
  ['KA', 'RIN', 'CA'], ['YA', 'SAN' , 'TI'] , ['TA', 'RAF', 'LI'],
  ['FI', 'LO' , 'ZOF'] , ['KE', 'SIN', 'TI'], ['BASKA', 'LAS' , 'MA'] , ['YAL', 'NIZ', 'LIK']]

randomButtonElement.addEventListener('click', function (e) {
  randomSayiUretme()
  dragAndDropMain()
  oyunAlani()
})

check()
