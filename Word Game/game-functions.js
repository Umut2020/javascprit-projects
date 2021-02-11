function randomSayiUretme () {
  randomSayi = (Math.floor(Math.random() * 10)); // 0 ve 9 arasında sayı üretir.
}

// siralanan kelimelerin check butonu ile kontrol edilmesini saglayan fonk.

function check () {
  checkButtonElement.addEventListener('click' , function (e) {
    let dogruKelime = box1Element.innerText + box2Element.innerText + box3Element.innerText
    let randomSayiyiBulma = randomSayi
    randomSayiDegerlendirme(randomSayiyiBulma , dogruKelime)
  })
}

function randomSayiDegerlendirme (pRandom , pkelime) {
  if ((heceGruplari[pRandom]).join('') === pkelime) {
    alert('Bravo!!! Diger kelimeleri denemek icin Random a tiklayiniz')
  }else {
    alert('Yanlis duzenlediniz lutfen tekrar ediniz!')
  }
}

// kelimeleri karisik olarak ekrana bastrimak icin bu fonksiyon kullanilabilir

function oyunAlani () {
  box1Element.innerText = heceGruplari[randomSayi][2]
  box2Element.innerText = heceGruplari[randomSayi][0]
  box3Element.innerText = heceGruplari[randomSayi][1]
}
