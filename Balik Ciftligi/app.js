const fishFarm = [
  {
    fishType: 'Salmon',
    price: 15.70,
    entryDate: new Date(2021, 0, 1), // 01.01.2021
    durationInDays: 30,
    itemWeightInGrams: 145,
    originCountry: 'Norway',
    season: 'Winter',
    stockVolumeInKg: 6500,
    saleLocations: ['ZH', 'GE', 'BE', 'VD']

  },
  {
    fishType: 'Seatrout',
    price: 7.90,
    entryDate: new Date(2021, 11, 12), // 12.12.2021
    durationInDays: 20,
    itemWeightInGrams: 460,
    originCountry: 'Japan',
    season: 'Winter',
    stockVolumeInKg: 1600,
    saleLocations: ['GL', 'GR', 'BE', 'VS']
  },
  {
    fishType: 'Sailfish',
    price: 5.20,
    entryDate: new Date(2021, 3, 19),
    durationInDays: 15,
    itemWeightInGrams: 240,
    originCountry: 'United Kingdom',
    season: 'Spring',
    stockVolumeInKg: 500,
    saleLocations: ['ZH', 'SH', 'BL', 'SO']
  },
  {
    fishType: 'Red Drum',
    price: 3.10,
    entryDate: new Date(2021, 5, 15),
    durationInDays: 18,
    itemWeightInGrams: 300,
    originCountry: 'Poland',
    season: 'Summer',
    stockVolumeInKg: 15500,
    saleLocations: ['FR', 'GE', 'NE', 'TI']
  },
  {
    fishType: 'Pompano',
    price: 10,
    entryDate: new Date(2021, 8, 17),
    durationInDays: 20,
    itemWeightInGrams: 645,
    originCountry: 'France',
    season: 'Autumn',
    stockVolumeInKg: 1500,
    saleLocations: ['ZH', 'GE', 'BE', 'VD']
  },
  {
    fishType: 'Bluefish',
    price: 13.70,
    entryDate: new Date(2021, 10, 11),
    durationInDays: 5,
    itemWeightInGrams: 845,
    originCountry: 'Italy',
    season: 'Winter',
    stockVolumeInKg: 200,
    saleLocations: ['NW', 'OW', 'UR', 'LU']
  },
  {
    fishType: 'Mackerel',
    price: 8.90,
    entryDate: new Date(2021, 6, 18),
    durationInDays: 16,
    itemWeightInGrams: 150,
    originCountry: 'GREECE',
    season: 'Summer',
    stockVolumeInKg: 8100,
    saleLocations: ['AG', 'BL', 'BE', 'VD', 'TG']
  },
  {
    fishType: 'Perch',
    price: 11.90,
    entryDate: new Date(2021, 10, 1),
    durationInDays: 30,
    itemWeightInGrams: 222,
    originCountry: 'Egypt',
    season: 'Summer',
    stockVolumeInKg: 9500,
    saleLocations: ['TI', 'GE', 'ZH', 'VD', 'AR']
  },
  {
    fishType: 'Mullet',
    price: 4.80,
    entryDate: new Date(2021, 2, 14),
    durationInDays: 30,
    itemWeightInGrams: 333,
    originCountry: 'Vietnam',
    season: 'Summer',
    stockVolumeInKg: 600,
    saleLocations: ['ZH', 'GE', 'BE', 'VD']
  },
  {
    fishType: 'Tuna',
    price: 19.50,
    entryDate: new Date(2021, 0, 1),
    durationInDays: 30,
    itemWeightInGrams: 250,
    originCountry: 'Spain',
    season: 'Winter',
    stockVolumeInKg: 2300,
    saleLocations: ['ZH', 'VD', 'BS', 'TI', 'SG']
  }
]
// stok miktari girildiginde baliklarin listesine ulasilabilir

let besYuzKgUzerindeStoguOlanBaliklar = balikStogunuBulma(fishFarm , 500)
console.log(`500 Kg'in uzerinde stogu olan baliklar: ${besYuzKgUzerindeStoguOlanBaliklar.toString()}`)

// alt ve ust limitler girildiginde balik listesi ekrana yazdirilir

let fiyatAraligindakiBaliklar = fiyatAraligindaBalikBulma(fishFarm , 9 , 12)
console.log(`9 ile 12 Frank fiyat araligindaki balilar : ${fiyatAraligindakiBaliklar.toString()}`)

// kanton ve mevsim bilgisi girilerek balik listesine ulasilabilir

let berndeSatilanKisSezonuBaliklari = kantonVeMevsimeGoreBalikBulma(fishFarm , 'Winter' , 'BE')

console.log(`Bernde kis sezonunda satilan baliklar : ${berndeSatilanKisSezonuBaliklari.toString()}`)

/******************************** */

// 4. sorunun cozumu bana ait degil --> incelenmek icin burada 

console.log(orderExpirationDate(fishFarm))
/**
 * on frankin altinda ve Avrupadan gelen baliklarin sirali listesi
 * paremetresiz fonksiyon ile
 */
let onFrankAltiAvrupaBaliklari = onFranklikAvrupaBaliklariniBulmaVeSiralama()
console.log(`10 Frank altinda Avrupada satilan baliklar : ${onFrankAltiAvrupaBaliklari.toString()}`)

// tum stoklardaki baliklari toplayan paremetresiz fonksiyon

let stoklardakiBalikMiktari = tumStoklardakiBalikDurumu()
console.log(`Stoklardaki toplam balik miktari : ${stoklardakiBalikMiktari.toString()}`)

// en pahali baligi paremetresi fonksiyon ile bulma
console.log(enPahaliBaligiBulma())
// ****************************** */
console.log(enUzunSureDayanabilenBaliklarinUlkesiniBulma(fishFarm))
// ******************************* */ 
let kisSonbaharVeRemondeRegionunFiyatListesi = listOrtalamasiBulma(kisSonbaharVeRemondeRegionunFiyatListesiniBulma())

console.log(`Kis ve Sonbahar mevsimlerinde Remonde Swiss bolgesinde satilan baliklarin ortalama fiyati : ${kisSonbaharVeRemondeRegionunFiyatListesi} CH.`)

/*********************************** */
let ticinoStoktakiBalik = kantonTicinoStokBalikAdedi(fishFarm)
console.log(`Ticino kantonunda stoktaki balik miktari : ${ticinoStoktakiBalik}`)
/**************************** */
let avrupaDisindanGelenYazlikZurichBaliklari = sezonaVeKantonaGoreOrtalamaBalikGramajiBulma(fishFarm , 'Summer' , 'ZH')
console.log(`Avrupa kitasi disindan gelen ve yazlik sezonda Zurich te satilan baliklarin ortalama gramaji : ${avrupaDisindanGelenYazlikZurichBaliklari} gr.`)
