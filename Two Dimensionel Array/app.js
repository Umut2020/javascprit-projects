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

// ic arraydeki ders index numaralarinin degiskene atadim.
const indexofAd = 0
const indexofMat = 1
const indexofDeutsch = 2
const indexofEnglisch = 3
const indexofGeo = 4
// ders adlari degiskenlere atanmistir
const matAdi = 'Mathematics'
const almancaAdi = 'Deutsch'
const ingilizceAdi = 'Englisch'
const cografyaAdi = 'Geography'

/**
 * Asagidaki dersinOrtalamaNotu fonksiyonuna dersAdi paremetresi girildiginde 
 * girilen dersin sinif ortalamsini gosterir(dersAdi degiskenide degistirillebilir)
 * NOT:fonksiyonu asagida tekrar kullandigim icin ort sayi degeri olarak return ettim ; konsola yazdirmadim
 */
let dersAdi = matAdi
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
 * Asagidaki fonksiyon ile  notes dizisinin girilmesi ile 
 * herhangi bir dersten 70 puan ustu alanlar 
 * yetmisPuanUstuNotuOlanlar listinin icersine alinmistir
 * ikinci if dongusu birden fazla dersten 70 puan alan ogrencinin 
 * listin icine tekrar yazilmamasi icin kullanilmistir
 */

function yetmisPuanUstuNotuOlanlariBulma (liste) {
  let yetmisPuanUstuNotuOlanlar = []
  for (let i = 0; i < notes.length; i++) {
    for (let j = 0; j < notes[i].length; j++) {
      if (notes[i][j] > 70) {
        if (yetmisPuanUstuNotuOlanlar.indexOf(notes[i][indexofAd]) === -1) {
          yetmisPuanUstuNotuOlanlar.push(notes[i][indexofAd])
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
 * Asagidaki enIyiNotuBulma fonksiyonu ile liste paremetresine
 * girilen list ile en yuksek puani alan ogrencinin notu ismi ve ders adi gosterilmistir
 *  
 */

function enIyiNotuBulma (liste) {
  let enIyiNot = 0
  let enIyiNotuAlanOgrenci = null
  let enIyiNotunOlduguDers = null
  for (let i = 0; i < notes.length; i++) {
    for (let j = 1; j < notes[i].length; j++) {
      if (notes[i][j] > enIyiNot) {
        enIyiNot = notes[i][j]
        enIyiNotuAlanOgrenci = notes[i][indexofAd]
        if (j === indexofMat) {
          enIyiNotunOlduguDers = matAdi
        }else if (j === indexofDeutsch) {
          enIyiNotunOlduguDers = almancaAdi
        }else if (j === indexofEnglisch) {
          enIyiNotunOlduguDers = ingilizceAdi
        }else if (j === indexofGeo) {
          enIyiNotunOlduguDers = cografyaAdi
        }
      }
    }
  }
  console.log(`Sinifta en iyi nota sahip ogrenci olan ${enIyiNotuAlanOgrenci} nin ${enIyiNotunOlduguDers} dersindeki notu ${enIyiNot}`)
}
enIyiNotuBulma(notes)

/**
 * Asagidaki enKotuNotuBulma fonksiyonu ile liste paremetresine
 * girilen list ile en dusuk puani alan ogrencinin notu ismi ve ders adi gosterilmistir
 * (sonuc olarak sinifin en kotu oldugu ders)  
 */

function enKotuNotuBulma (liste) {
  let enKotuNot = 100
  let enKotuNotuAlanOgrenci = null
  let enKotuNotunOlduguDers = null
  for (let i = 0; i < notes.length; i++) {
    for (let j = 1; j < notes[i].length; j++) {
      if (notes[i][j] < enKotuNot) {
        enKotuNot = notes[i][j]
        enKotuNotuAlanOgrenci = notes[i][indexofAd]
        if (j === indexofMat) {
          enKotuNotunOlduguDers = matAdi
        }else if (j === indexofDeutsch) {
          enKotuNotunOlduguDers = almancaAdi
        }else if (j === indexofEnglisch) {
          enKotuNotunOlduguDers = ingilizceAdi
        }else if (j === indexofGeo) {
          enKotuNotunOlduguDers = cografyaAdi
        }
      }
    }
  }
  console.log(`Sinifta en kotu nota sahip ogrenci olan ${enKotuNotuAlanOgrenci} nin ${enKotuNotunOlduguDers} dersindeki notu ${enKotuNot}`)
}
enKotuNotuBulma(notes)

/**
 * Asagidaki dersinEniyiOgrencisi fonksiyonu ile dersAdi paremetresine
 * girilen ders adi ile o dersteki en yuksek puani alan yani eniyi ogrenciyi aldigi not
 * ile birlij=kte gostermistir  
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

dersinEnIyiOgrencisi(ingilizceAdi)
