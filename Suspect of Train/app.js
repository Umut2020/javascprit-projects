/********DEGISKENLER ******/ //sabit deger alan hicbi=r degisken ollmadigi icin let kullanildi
let denemeHakki = 4; // deneme hakkinin tanimlanmasi
let vagonNumarasi = Math.floor(Math.random() * 10) + 1;// random ile 0-1 arasinda rastgele sayi elde ettim. 0-10 arasindaki sayilari 10 ile carpip floor metodunu kullanarak 1-10arasinda rastgele sayilari elde etmis oldum.
let tahminSayisi;//kullanicinin girecegi tahmin sayisi
let hakSayaci = 0;// kac defada bildigini tespit etmek ve puanlamayi ona gore duzenlemek icin degisken


while (denemeHakki>0) { // oyunun bittiginide belirtmek icin 0>=0 kullandim
  denemeHakki--; 
  hakSayaci++;
  let puan = 100 - (hakSayaci-1) * 25;// 4 soru her bilinmeyen soruda 25 puan kesinti
  tahminSayisi = prompt("Bir sayi giriniz");// kullainicinin tahmini
  
 if (tahminSayisi == vagonNumarasi) {
    alert(`Tebrikler ${hakSayaci}. seferde bildiniz`); 
    alert("Puaniniz :" + puan);
    break; // eger ilk 3 hakta bilinmesi durumunda dongunu kirilmasi icin
  }else if (tahminSayisi > vagonNumarasi) {
    alert("Sucluyu on vagonlarda arayiniz");
  }else if (tahminSayisi < vagonNumarasi) {
    alert("Sucluyu arka vagonlarda arayiniz");
  }
  if(denemeHakki==0){ //ekstra bir durum incelemsi haklar bitince ekrana haklarin bittiginin belirtilmesi;
    alert("Uzgunuz haklariniz bitti oyunu kaybettiniz.");
  }
}
