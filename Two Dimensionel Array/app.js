// sabit multidimensionel arrayimiz
const notes = [
  ['Hans', 80, 90, 10, 50],
  ['Ulrich', 94, 36, 76, 74],
  ['Olaf', 30, 60, 34, 78],
  ['Otto', 60, 60, 78, 23],
  ['Tina', 71, 45, 89, 100],
  ['Rosalina', 40, 56, 82, 40],
  ['Urs', 49, 45, 56, 67],
  ['Monika', 49, 42, 16, 62]
]
// ic arraydeki ders index numaralarinin degiskene atanmasi
const indexofAd = 0
const indexofMat = 1
const indexofDeutsch = 2
const indexofEnglisch = 3
const indexofGeo = 4
// ders adlarinin degiskenlere atanmasi
const matAdi = 'Mathematics'
const almancaAdi = 'Deutsch'
const ingilizceAdi = 'Englisch'
const cografyaAdi = 'Geography'
// ders adlarinin listelendigi array
const dersAdiListesi = [ 'Mathematics' , 'Deutsch' , 'Englisch' , 'Geography' ]

/**
 * Asagidaki dersinOrtalamaNotu fonksiyonuna dersAdi paremetresi girildiginde 
 * girilen dersin sinif ortalamsini gosterir(dersAdi degiskenide degistirillebilir)
 * NOT:fonksiyonu asagida tekrar kullandigim icin ort sayi degeri olarak return ettim ; konsola yazdirmadim
 */
let dersAdi = cografyaAdi
dersinOrtalamaNotu(dersAdi)

function dersinOrtalamaNotu (dersAdi) {
  let ort = 0
  if (dersAdi === matAdi) {
    for (let i = 0; i < notes.length; i++) {
      ort += notes[i][indexofMat] / notes.length
    }
  }else if (dersAdi === almancaAdi) {
    for (let i = 0; i < notes.length; i++) {
      ort += notes[i][indexofDeutsch] / notes.length
    }
  }else if (dersAdi === ingilizceAdi) {
    for (let i = 0; i < notes.length; i++) {
      ort += notes[i][indexofEnglisch] / notes.length
    }
  }else if (dersAdi === cografyaAdi) {
    for (let i = 0; i < notes.length; i++) {
      ort += notes[i][indexofGeo] / notes.length
    }
  }
  return ort
}
console.log(dersAdi + ' ortalamasi ' + dersinOrtalamaNotu(dersAdi))
/**
 * Asagidaki fonksiyon ile  pliste paremetere dizisinin girilmesi ile 
 * herhangi bir dersten 70 puan ustu alanlar 
 * yetmisPuanUstuNotuOlanlar listinin icersine alinmistir
 * ikinci if dongusu birden fazla dersten 70 puan alan ogrencinin 
 * listin icine tekrar yazilmamasi icin kullanilmistir
 */

function yetmisPuanUstuNotuOlanlariBulma (pliste) {
  let yetmisPuanUstuNotuOlanlar = []
  for (let i = 0; i < pliste.length; i++) {
    for (let j = 0; j < pliste[i].length; j++) {
      if (pliste[i][j] > 70) {
        if (yetmisPuanUstuNotuOlanlar.indexOf(pliste[i][indexofAd]) === -1) {
          yetmisPuanUstuNotuOlanlar.push(pliste[i][indexofAd])
        }
      }
    }
  }
  console.log(yetmisPuanUstuNotuOlanlar)
}
yetmisPuanUstuNotuOlanlariBulma(notes)
/**
 * Asagidaki ortalamaninUstundeKimVar fonksiyonu ile dersAdi paremetresine
 * girilen derste ortalamanin uzerindeki ogreciler listelenmistir
 * (Bu fonksiyonda ortlamalar icin dersinOrtalamaNotu fonksiyonu kullanilmistir) 
 */
let ortalamaninUstundeOlanlar = []
ortalamaninUstundeKimVar(ingilizceAdi)

function ortalamaninUstundeKimVar (dersAdi) {
  if (dersAdi === matAdi) {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i][indexofMat] > dersinOrtalamaNotu(dersAdi)) {
        ortalamaninUstundeOlanlar.push(notes[i][indexofAd])
      }
    }
  }else if (dersAdi === almancaAdi) {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i][indexofMat] > dersinOrtalamaNotu(dersAdi)) {
        ortalamaninUstundeOlanlar.push(notes[i][indexofAd])
      }
    }
  }else if (dersAdi === ingilizceAdi) {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i][indexofMat] > dersinOrtalamaNotu(dersAdi)) {
        ortalamaninUstundeOlanlar.push(notes[i][indexofAd])
      }
    }
  }else if (dersAdi === cografyaAdi) {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i][indexofMat] > dersinOrtalamaNotu(dersAdi)) {
        ortalamaninUstundeOlanlar.push(notes[i][indexofAd])
      }
    }
  }
  return console.log(`${dersAdi} dersinde ${dersinOrtalamaNotu(dersAdi)} ortalamasinin uzerinde olan ogrenciler : ${ortalamaninUstundeOlanlar}`)
}

/**
 * Asagidaki enIyiOrtalamayaSahipDersiBulma fonksiyonu ile liste paremetresine
 * girilen dersi ismi  listesi  ile en yuksek ortalamaya sahip olunan ders gosterilir.Bunun icin once 
 * en yuksek ortalamanin oldugu dersin notunu bulan fonksiyon yapilmistir  
 */
let enIyiOrtalamayaSahipDersNotu = 0
let enIyiOrtalamayaSahipDers = ''

function enIyiOrtalamayaSahipDersNotunuBulma (plist) {
  for (let i = 0; i < plist.length; i++) {
    if (dersinOrtalamaNotu(plist[i]) > enIyiOrtalamayaSahipDersNotu) {
      enIyiOrtalamayaSahipDersNotu = dersinOrtalamaNotu(plist[i])
    }
  }
  return enIyiOrtalamayaSahipDersNotu
}

function enIyiOrtalamayaSahipDersiBulma (plist) {
  enIyiOrtalamayaSahipDersNotu = enIyiOrtalamayaSahipDersNotunuBulma(plist)

  for (let i = 0; i < plist.length; i++) {
    if (dersinOrtalamaNotu(plist[i]) == enIyiOrtalamayaSahipDersNotu) {
      enIyiOrtalamayaSahipDers = plist[i]
    }
  }

  return console.log(`Sinifin en iyi ortalamaya sahip oldugu ders : ${enIyiOrtalamayaSahipDers}`)
}

enIyiOrtalamayaSahipDersiBulma(dersAdiListesi)

/**
 * Asagidaki enKotuOrtalamayaSahipDersiBulma fonksiyonu ile liste paremetresine
 * girilen dersi ismi  listesi  ile en dusuk ortalamaya sahip olunan ders gosterilir.Bunun icin once 
 * en kotu ortalamanin oldugu dersin notunu bulan fonksiyon yapilmistir  
 */
let enKotuOrtalamayaSahipDersNotu = dersinOrtalamaNotu(dersAdi)
let enKotuOrtalamayaSahipDers = ''

function enKotuOrtalamayaSahipDersNotunuBulma (plist) {
  for (let i = 0; i < plist.length; i++) {
    if (dersinOrtalamaNotu(plist[i]) < enKotuOrtalamayaSahipDersNotu) {
      enKotuOrtalamayaSahipDersNotu = dersinOrtalamaNotu(plist[i])
    }
  }
  return enKotuOrtalamayaSahipDersNotu
}

function enKotuOrtalamayaSahipDersiBulma (plist) {
  enKotuOrtalamayaSahipDersNotu = enKotuOrtalamayaSahipDersNotunuBulma(plist)

  for (let i = 0; i < plist.length; i++) {
    if (dersinOrtalamaNotu(plist[i]) == enKotuOrtalamayaSahipDersNotu) {
      enKotuOrtalamayaSahipDers = plist[i]
    }
  }

  return console.log(`Sinifin en kotu ortalamaya sahip oldugu ders : ${enKotuOrtalamayaSahipDers}`)
}
enKotuOrtalamayaSahipDersiBulma(dersAdiListesi)
/**
 * Asagidaki dersinEniyiOgrencisi fonksiyonu ile dersAdi paremetresine
 * girilen ders adi ile o dersteki en yuksek puani alan yani eniyi ogrenciyi aldigi not
 * ile birlikte gostermistir  
 */
function dersinEnIyiOgrencisi (dersAdi) {
  let enYuksekNot = 0
  let dersinEnIyiOgrencisi = null
  if (dersAdi === matAdi) {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i][indexofMat] > enYuksekNot) {
        enYuksekNot = notes[i][indexofMat]
        dersinEnIyiOgrencisi = notes[i][indexofAd]
      }
    }
  }else if (dersAdi === almancaAdi) {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i][indexofDeutsch] > enYuksekNot) {
        enYuksekNot = notes[i][indexofDeutsch]
        dersinEnIyiOgrencisi = notes[i][indexofAd]
      }
    }
  }else if (dersAdi === ingilizceAdi) {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i][indexofEnglisch] > enYuksekNot) {
        enYuksekNot = notes[i][indexofEnglisch]
        dersinEnIyiOgrencisi = notes[i][indexofAd]
      }
    }
  }else if (dersAdi === cografyaAdi) {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i][indexofGeo] > enYuksekNot) {
        enYuksekNot = notes[i][indexofGeo]
        dersinEnIyiOgrencisi = notes[i][indexofAd]
      }
    }
  }
  return console.log(`${dersAdi} dersinde en iyi ogrenci ${dersinEnIyiOgrencisi} dir. Puani : ${enYuksekNot}`)
}

dersinEnIyiOgrencisi(matAdi)
