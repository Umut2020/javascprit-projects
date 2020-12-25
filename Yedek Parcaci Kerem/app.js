// Yedek Parca Envanterinin bir liste atanmasi

let yedekParcaListesi = ['kaporta' , 'Motor' , 'direksiyonkilifi39' , '02direksiyonkilifi' , 'Bagajkapagi' , 'ayna88' , 'far9' , 'far2' ]

/**
 * Asagidaki fonksiyona bir plist paranetresi yazildiginda paremetre olarak girilen 
 * listin tum elemanlarinin tum harflerini buyuk harfe cevirir ve return olarak yeni bir listi ekrana yazdirir
 */
function buyukHarfeCevirme (plist) {
  let donusturme = plist.toString()

  plist = donusturme.toUpperCase().split(',')

  return console.log(plist)
}

buyukHarfeCevirme(yedekParcaListesi)
/**
 * Asagidaki fonksiyona bir plist paranetresi yazildiginda paremetre olarak girilen 
 * listin tum elemanlarinin icersindeki tum sayilar kaldirilir ve return olarak yeni bir listi ekrana yazdirir
 * */
function kelimelerdenSayilariKaldirma (plist) {
  let donusturme = plist.toString()

  for (let i = 0; i < donusturme.length;  i++) {
    if (donusturme[i] === '0' || donusturme[i] === '1' || donusturme[i] === '2' || donusturme[i] === '3' || donusturme[i] === '4' || donusturme[i] === '5' || donusturme[i] === '6' || donusturme[i] === '7' || donusturme[i] === '8' || donusturme[i] === '9') {
      donusturme = donusturme.replace(donusturme[i], '')
      i--
    }
  }

  plist = donusturme.split(',')

  return console.log(plist)
}

kelimelerdenSayilariKaldirma(yedekParcaListesi)
/**
 * Asagidaki fonksiyona bir list paranetresi yazildiginda paremetre olarak girilen 
 * listin tum elemanlarinin icersindeki elemanlar tersten yazilir ve return olarak yeni bir listi ekrana yazdirir
 */

function listeElemanlariniTersCevirme (plist) {
  for (let i = 0; i < plist.length;  i++) {
    plist[i] = plist[i].toString().split('').reverse().toString().replaceAll(',' , '')
  }

  return console.log(plist)
}

// listeElemanlariniTersCevirme(yedekParcaListesi) 

/**
 * Asagidaki fonksiyona bir list paranetresi yazildiginda paremetre olarak girilen 
 * listin tum elemanlarinin icersindeki elemanlarin onune eklenti degiskenindeki string yazilir
 * ve return olarak yeni bir listi ekrana yazdirir
 */

const eklenti = 'KEREMAG_'

function listeKelimeEkleme (plist) {
  for (let i = 0; i < plist.length;  i++) {
    plist[i] = eklenti.concat(plist[i])
  }

  return console.log(plist)
}

listeKelimeEkleme(yedekParcaListesi)

/**
 * Asagidaki fonksiyona bir list paranetresi yazildiginda paremetre olarak girilen 
 * listin tum elemanlarinin icersindeki elemanlarin sonuna tarih degiskenindeki tarih bilgisi eklenir
 * ve return olarak yeni bir listi ekrana yazdirir
 */
let tarih = new Date()

function listeTarihEkleme (plist) {
  for (let i = 0; i < plist.length;  i++) {
    plist[i] = plist[i].concat('>>>>>>>>>>').concat(tarih)
  }
  return console.log(plist)
}

listeTarihEkleme(yedekParcaListesi)
