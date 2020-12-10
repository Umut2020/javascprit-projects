/***** DEGISKENLER **********************/
let sayilar = [1, 100, -5, -2, 63, 0, 21, 100, 99, 7, 5];
let kareler = [];
let toplam = 0;
let ortalanacakSayiToplam = 0,
  ortalama;
let enBuyukSayi = sayilar[0];
let karekokler = [];
let enKucukSayi = sayilar[0];

/************* KARE ALMA  ***************/
for (let i = 0; i < sayilar.length; i++) {
  kareler[i] = sayilar[i] * sayilar[i];
}

/************* TOPLMAMA ***************/

for (let i = 0; i < sayilar.length; i++) {
  toplam += sayilar[i];
}

/************* ORTALAMA  ***************/

for (let i = 0; i < sayilar.length; i++) {
  ortalanacakSayiToplam += sayilar[i];
  ortalama = ortalanacakSayiToplam / sayilar.length;
}

/************* EN BUYUK SAYI  ***************/

for (let i = 0; i < sayilar.length; i++) {
  if (sayilar[i] > enBuyukSayi) {
    enBuyukSayi = sayilar[i];
  }
}

/************* EN KUCUK SAYI  ***************/

for (let i = 0; i < sayilar.length; i++) {
  if (sayilar[i] < enKucukSayi) {
    enKucukSayi = sayilar[i];
  }
}

/************* KAREKOK ALMA  ***************/

for (let i = 0; i < sayilar.length; i++) {
    if (sayilar[i] >= 0) {
    karekokler[i] = sayilar[i] ** (1 / 2);
  } else {
    karekokler[i] = "Negatif sayilarin karekoku alinimaz";
  }
}

