/**
 * Müsteri bizden carpim tablosu uygulamasi talep ediyor. Bu uygulamada bir puanlama sistemi olacak ve musteri
 * uygulamayi kullanan kullanicinin puanlarini takip edebilecek. Kullanicilar kendi isimlerini listeye ekleyebilecek
 * ve listeden cikarabilecekler
 *    
 * 1) Sayfa üzeride Bootstrap kullanilarak bir HTML yapisi olusturulacak.
 *    Style icin CSS kullanilabilir
 * 2) Olusturlan sayfada oyunculari kayit edilecegi bir fonksion olusturulacak
 * 3) Bir start butonu ile oyunun baslamasini saglayan bir fonksiyon olusturacak
 * Bu fonksiyon ile ayni zamanda zaman kontrolu yapilabilacek
 * 4) Oyun sonunda tabloya oyuncunun puani eklenecek
 * 5) Alinan puanlar localstorage a kaydedilecek.Gerektiginde silinebilecek(BU KISMI TAMAMLAYAMADIM)
 */

let personList = []

let firstNummer = randomNummer()
let secondNummer = randomNummer()

// oyunculari personList in icine atan fonksiyon
function getPerson () {
  let firstName = document.querySelector('#first-name').value
  let lastName = document.querySelector('#last-name').value
  let totalScore = 0
  return {
    firstName: firstName,
    lastName: lastName,
    totalScore: totalScore
  }
}
