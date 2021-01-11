function balikStogunuBulma (liste , kilo) {
  let yarimTonUstuBaliklar = []
  liste.map((urun) => {
    if (urun.stockVolumeInKg > kilo) {
      yarimTonUstuBaliklar.push(urun.fishType)
    }
  }
  )
  return yarimTonUstuBaliklar
}

/************************ */

function fiyatAraligindaBalikBulma (liste , altLimit, ustLimit) {
  let fiyatAraligi = []
  liste.map((urun) => {
    if (urun.price > altLimit && urun.price < ustLimit) {
      fiyatAraligi.push(urun.fishType)
    }
  }
  )
  return fiyatAraligi
}

/***************************** */

function kantonVeMevsimeGoreBalikBulma (liste , zaman , yer) {
  let yerVeMevsimeGoreBalikBulma = []
  liste.map((mevsim) => {
    mevsim.saleLocations.filter((kanton) => {
      if (kanton === yer && mevsim.season === zaman) {
        yerVeMevsimeGoreBalikBulma.push(mevsim.fishType)
      }
    }
    )
  }
  )
  return yerVeMevsimeGoreBalikBulma
}
/********************************** */
function orderExpirationDate (fishFarm) {
  fishFarm.forEach(product => product.entryDate = product.entryDate.setDate(product.entryDate.getDate() + product.durationInDays))
  let sortedDate = fishFarm.sort((a, b) => a.entryDate - b.entryDate)
  let result = sortedDate.map(product => product.fishType + ' --->  ' + new Date(product.entryDate))
  return result.join('\n')
}

/********************************** */
function abUlkelerindenGelenBaliklariBulma () {
  const abUlkeleri = ['AUSTRIA', 'ITALY', 'BELGIUM', 'LATVIA' , 'BULGARIA', 'LITHUANIA', 'CROATIA', 'LUXEMBOURG', 'CYPRUS', 'MALTA', 'CZECHIA', 'NETHERLANDS', 'DENMARK', 'POLAND', 'ESTONIA', 'PORTUGAL', 'FINLAND', 'ROMANIA', 'FRANCE', 'SLOVAKIA', 'GERMANY', 'SLOVENIA', 'GREECE'  , 'SPAIN', 'HUNGARY', 'SWEDEN', 'IRELAND']
  let abUlkelerindenGelenBaliklar = []
  fishFarm.map((birlik) => {
    abUlkeleri.filter((ulkeler) => {
      if (birlik.originCountry.toUpperCase() === ulkeler) {
        abUlkelerindenGelenBaliklar.push(birlik.fishType)
      }
    })
  }
  )
  return abUlkelerindenGelenBaliklar
}
function onFranklikAvrupaBaliklariniBulmaVeSiralama () {
  let alfabetikBaliksirasi = []
  let onFrankinAltindakiBaliklar = fiyatAraligindaBalikBulma(fishFarm , 0 , 10)

  abUlkelerindenGelenBaliklariBulma().map(abBaliklari => {
    onFrankinAltindakiBaliklar.filter(onFranklik => {
      if (abBaliklari === onFranklik) {
        alfabetikBaliksirasi.push(abBaliklari)
      }
    }
    )
  }
  )
  return alfabetikSiralama(alfabetikBaliksirasi)
}

function alfabetikSiralama (liste) {
  return liste.sort()
}

/************************************** */
function tumStoklardakiBalikDurumu () {
  let total = 0
  fishFarm.map((stoklar) => {
    total += stoklar.stockVolumeInKg
  })
  return total
}
/************************************* */
function enPahaliBaligiBulma () {
  let karsilastirmaMiktari = 0
  let enPahaliBalik = ''
  fishFarm.map(pahali => {
    if (pahali.price > karsilastirmaMiktari) {
      karsilastirmaMiktari = pahali.price
      enPahaliBalik = pahali.fishType
    }
  })
  return `En pahali balik :  ${enPahaliBalik}`
}
/***************************************** */
function enUzunSureDayanabilenBaliklarinUlkesiniBulma (liste) {
  let karsilastirmaMiktari = 0
  let enUzunSureDayanabilenBaliklarinGeldikleriUlkeler = []
  liste.map(duration => {
    if (duration.durationInDays >= karsilastirmaMiktari) {
      karsilastirmaMiktari = duration.durationInDays
      enUzunSureDayanabilenBaliklarinGeldikleriUlkeler.push(duration.originCountry)
    }
  })
  return `En fazla tuketim suresine sahip baliklarin geldigi ulkeler :  ${enUzunSureDayanabilenBaliklarinGeldikleriUlkeler}`
}
/************************************** */
function remondeSwissRegionSucht () {
  let remondeRegion = []
  fishFarm.filter(item => {
    item.saleLocations.filter(region => {
      if (region === 'GE' || region === 'VD' || region === 'NE') {
        if (!remondeRegion.includes(item)) {
          remondeRegion.push(item)
        }
      }
    })
  })
  return remondeRegion
}

function kisSonbaharVeRemondeRegionunFiyatListesiniBulma () {
  let kisSonbaharSezonuVeRemondeRegion = []
  let fiyatListesi = []
  remondeSwissRegionSucht().filter(item => {
    if (item.season === 'Autumn' || item.season === 'Winter') {
      kisSonbaharSezonuVeRemondeRegion.push(item)
    }
  })

  kisSonbaharSezonuVeRemondeRegion.map(fiyat => {
    fiyatListesi.push(fiyat.price)
  })

  return fiyatListesi
}

function listOrtalamasiBulma (liste) {
  let toplam = 0
  liste.map((sayilar) => {
    toplam += sayilar
  }
  )
  return toplam / liste.length
}
/************************************** */
function toplama (liste) {
  let toplam = 0
  liste.map((sayilar) => {
    toplam += sayilar
  })
  return toplam
}

function kantonTicinoStokBalikAdedi (liste) {
  let kantonTicinoBalikStokListesi = []
  let kantonTicinoBalikStokListesiTaneBalikGramListesi = []

  liste.map(item => {
    item.saleLocations.filter(region => {
      if (region === 'TI') {
        kantonTicinoBalikStokListesi.push(item.stockVolumeInKg)
        kantonTicinoBalikStokListesiTaneBalikGramListesi.push(item.itemWeightInGrams)
      }
    })
  })
  return (toplama(kantonTicinoBalikStokListesi)) / listOrtalamasiBulma(kantonTicinoBalikStokListesiTaneBalikGramListesi)
}
/************************************** */
function sezonaVeKantonaGoreOrtalamaBalikGramajiBulma (liste , sezon , kanton) {
  let yazlikSezondaZurichteCikanlistesi = []
  let yazlikSezondaZurichteCikanBalikGramajlistesi = []
  liste.map(item => {
    if (item.season === sezon) {
      item.saleLocations.filter(region => {
        if (region === kanton) {
          yazlikSezondaZurichteCikanlistesi.push(item)
        }
      })
    }
  })

  yazlikSezondaZurichteCikanlistesi.map(item => {
    yazlikSezondaZurichteCikanBalikGramajlistesi.push(item.itemWeightInGrams)
  })
  let yazlikSezondaZurichteCikanBaliklarinortalamaGramaji = listOrtalamasiBulma(yazlikSezondaZurichteCikanBalikGramajlistesi)
  return yazlikSezondaZurichteCikanBaliklarinortalamaGramaji
}
