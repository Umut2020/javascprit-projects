/**
 * Müsteri bizden okul ogrenci kayit listelemek icin bir program talep ediyor. Odevde ogrencini isim soyisim ve yas bilgilerinin 
 * girilecegi bir form alani ve girilen verileri listelemek icin bir olmali.Ayrica listelenen ogrenci verileri de toplam 
 * sayi ile birlikte program ekraninda gosterilebilir olmali ve gerektiginde kayitlar listeden silinebilmeli
 *
 * 1) Sayfa üzeride bir HTML yapisi olusturulacak.
 *    Style icin CSS kullanilabilir
 * 2) Olusturlan sayfayada ogrenci isimlerinin listelenebilmesi icin fonksion form alani olusturulacak
 * 3) Girilen datalarin alinmasi icin bir fonksiyon olusturlacak
 * 4) Girilen verilerin bir buton yardimiyla listelebilmesi icin bir fonksiyon olusturulacak (tablo yardimiyla listelenecek)
 * 5) Toplam ogrenci sayisinin belirlenebilmesi icin bir fonksiyon olusturulacak
 * 6) Kayitlarin silinebilmesi icin bir gonksiyon olusturulacak
 * 7) Opsiyonel ==> (Son olarak girilen verilerin gerlerinin kontrol edilebilmesi icin bir fonksiyon olusturulacak)
 */

let ogrenciEklemeConteinerElementi = document.getElementById('ogrenci-ekleme-conteiner')
let ogrenciListelemeConteinerElementi = document.getElementById('ogrenci-listeleme-conteiner')
let toplamOgrenciElementi = document.getElementById('toplam-sayi')

let nameElement = document.getElementById('namet')
let snameElement = document.getElementById('sname')
let ageElement = document.getElementById('age')
let dogrulamaDegeri = false
let counter = 0

addToListe()

removeButtonIdBulma()
