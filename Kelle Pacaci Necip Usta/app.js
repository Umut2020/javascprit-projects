/**
 Bu haftaki programlama ödevimizde bir ciftciye yardim edecegiz. Ciftcimiz anlasmali oldugu kelle pacaci Necip Ustaya gercek zamanli istatistik vermek istiyor. Gayet müslüman olan Necip Usta ise, sordugu anda kac tane hayvan bacagi oldugu bilgisini almak istiyor.

Program: 
Ciftlikteki hayvanlar bir array icerisinde karisik sekilde tutulacak ve bu ciftlikte sadece su hayvanlar var:
- inek
- tavuk
- domuz
- koyun

Array örnegi: [“inek”, “inek”, “tavuk”, “domuz”, “inek”]
Yapacaginiz program verilen array üzerinden kullanilabilir hayvan bacagi sayisini bulacak ve ekrana bastiracak.

 */

let ciftligeHayvanEkleme = prompt('Ciftlikteki hayvanlari giriniz') // hayvan girdisini kullanicidan alma
ciftligeHayvanEkleme.toLowerCase() // her ihtimale karsi tum string elemanlarini kucuk harfe cevirme

let hayvanList = ciftligeHayvanEkleme.split(',') // virgul ile string olarak yazilan hayvanlari bir array listinin icine atama
let kullanilabilirBacakSayisi = 0 // bacak sayisi degiskeni

for (let i = 0; i < hayvanList.length; i++) { // tum hayvanListin teker teker kontrolu

  if (hayvanList[i] === 'domuz') { // pass
    kullanilabilirBacakSayisi += 0
  }
  else if (hayvanList[i] === 'inek') {
    kullanilabilirBacakSayisi += 4
  }
  else if (hayvanList[i] === 'koyun') {
    kullanilabilirBacakSayisi += 4
  }
  else if (hayvanList[i] === 'tavuk') {
    kullanilabilirBacakSayisi += 2
  }else {
    console.log(`ciftlik listesine yanlis hayvan eklenmis.${hayvanList[i]} ciftligimizde bulunmamaktadir.Lutfen listeyi kontrol ediniz`)
  }
}

console.log(hayvanList)
console.log(kullanilabilirBacakSayisi)
