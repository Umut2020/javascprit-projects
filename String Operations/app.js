/**
 * 
 1)  string olarak verilen bir isim ve soyismin sadece bas harflerini Uppercase a cevirin.
         ornek: “asik veysel“ ==> “Asik Veysel“

 2)  0 dan 100 e kadar olan sayilari, bir satirda 10 sayi ve her sayinin arasinda virgul olacak sekilde yazdiriniz (10x10 luk bir kare seklinde)

 3)  0 dan 100 e kadar olan prime (asal sayilari) yazdirin (Asal sayilar: sadece kendisine ve 1 e bolunebilen sayilar)
         bulunmasi gereken sonuc: 1, 2, 3, 5, 7, 11 ....

 4)  Kucuk, buyuk, ozel karakterler ve sayilardan olusan 8 ile 16 (hane) uzunluklari arasinda guvenli 50 adet sifre olusturunuz. 
 
 5)  Asagidaki sekli programlama yapilarini kullanarak cizdiriniz.
​
 *
 **
 ***
 ****
 *****
 ******
*/

/******  Ad-Soyad Bas Harfi Buyuk    *********/

let adSoyad = 'umut gungor'
adSoyad.toLocaleLowerCase()

let soyadIndexNo = adSoyad.indexOf(' ') + 1
let ad = adSoyad.substring(0, soyadIndexNo)
let soyad = adSoyad.slice(soyadIndexNo)
let adBuyukIlkHarf = ad[0].toLocaleUpperCase()
let soyadBuyukIlkHarf = soyad[0].toLocaleUpperCase()

let adSoyadBuyukIlkHarf = `${adBuyukIlkHarf}${ad.substring(1,soyadIndexNo)}${soyadBuyukIlkHarf}${soyad.substring(1)}`
console.log(adSoyadBuyukIlkHarf)

/******  10X10 luk kare  *********/

let sayilar = '0,'

for (let index = 1; index <= 100; index++) {
  if (index < 8) {
    sayilar += 0; // tam kare yapma denemesi :)
  }

  if (index % 10 == 0) {
    sayilar += `${index}\n`
  }else {
    sayilar += index + ','
  }
}
console.log(sayilar)

/******  Asal Sayilar  *********/

let asalSayilar = '1,'
let sayac = 0

for (let i = 2; i < 100; i++) {
  for (let j = 2;  j <= i; j++) {
    if (i % j == 0) {
      sayac++
    }
  }

  if (sayac == 1) {
    asalSayilar += i + ','
  }
  sayac = 0
}
console.log(asalSayilar)

/******  Sifre Olusturma  **************/

let sifreUzunlugu = Math.floor(Math.random() * 8 + 8),
  kucukHarfler = 'abcdefghijklmnopqrstuvwxyz',
  buyukHarfler = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  rakamlar = '0123456789',
  ozelKarakterler = '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\',
  tumKarakterler = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\',
  sifre = ''

sifre += `${kucukHarfler[Math.floor(Math.random() * 26 )]}${buyukHarfler[Math.floor(Math.random() * 26 )]}${rakamlar[Math.floor(Math.random() * 10 )]}${ozelKarakterler[Math.floor(Math.random() * 32 )]}`
console.log(sifreUzunlugu)

for (let i = 1; i <= 50; i++) {
  for (let j = 1; j < sifreUzunlugu - 4; j++) {
    sifre += `${tumKarakterler[Math.floor(Math.random() * 94 )]}`
  }
  sifre += `###`
}
console.log(sifre)

/********* SekiL Olusturma ***********/

let yildiz = ''

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= i; j++) {
    yildiz += '*'
  }
  yildiz += `\n`
}

console.log(yildiz)
