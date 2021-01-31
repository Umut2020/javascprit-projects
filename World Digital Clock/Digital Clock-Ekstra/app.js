/**
 * Müsteri bizden dunya uzerindeki uc farkli sehre ait saat bilgisini ekranda gosteren bir program istiyor.Sehirleri 
 * belirlemek icin bir drop-down butonu olamali
 *
 * 1) Sayfa üzeride bir HTML yapisi olusturulacak.
 *    Style icin CSS kullanilabilir
 * 2) Olusturlan secilen sehrirlere ait saati ekrana yazdiran fonksiyonlar form alani olusturulacak
 * 3) Her bir saat icin diger saatlerin ekranda gozukmesini oratadan kaldirmak icin fonksiyon yazilacak
 *  
 */

let timezone = ''; // Europe/Zurich, America/New_York

setInterval(function () {
  clickEventHandler()
}, 1000)

document.querySelector('#select-box').addEventListener('change', function (pEvent) {
  timezone = pEvent.target.value
})
