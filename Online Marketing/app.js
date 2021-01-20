/**
 * Müsteri bizden urunlerinin satisinin yapilacagi web sitesini talep ediyor. Odevde bu web sitesinin 
 * urun listelerini bir database den alip site uzerine ekleme ve bu urunlerden satin alinmak istenen urunu
 * buton yardimiyla alisveris sepetine ekleme ve istenildiginde de sepetten cikarmamiz bekleniyor.Son 
 * durumda sepetteki urunlerin toplam fiyatinin listenin altinda gosterilmasi gerekiyor
 *  
 * 1) Sayfa üzeride Bootstrap kullanilarak bir HTML yapisi olusturulacak.
 *    Style icin CSS kullanilabilir
 * 2) Olusturlan sayfaya urun datalarini  yerlestirecek bir fonksion olusturulacak
 * 3) Sayfa uzeindeki urunleri satin alma butonu ile sepete ekleyen bir fonksiyon olusturulacak
 * 4) Sepetteki urunleri sil butonu yardimiyla sepetten cikaran bir fonksiyon olusturulacak
 * 5) Sepetteli urunlerin toplamini sepetin altinda gosteren bir fonksiyon yazilacak
 * 6) Opsiyonel ==> (Son olarak sepet bos oldugunda "Alisveris Sepetiniz Bos" yazisini iceren bir bolum 
 *    gozukacek. Sepet  dolu oldugunda yaziyi kaldiracak bir fonksiyon yazilacak)
 */

const sepetTable = document.getElementById('sepetteki urunler')
let totalPrice = 0

renderAllProducts()

sepeteUrunEkleme()
