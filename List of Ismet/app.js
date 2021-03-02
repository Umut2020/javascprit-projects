/**
 * Müsteri bizden ic ice gecmis tablo formlarini talep etmektedir. Bununla 
 * islerini kolay bir listeleme ve goruntuleme probrami olusturmamizi istiyor
 * 
 * Program akisi:
 * Ismet sisteme girer ve ilk olarak müsterilerinin listesini görür.
 * Bir müsterinin üzerine tikladiginda, o müsteriye ait bir veya birden
 * fazla hayatina kast edilen kisi listesi karsisina cikar.Bu listede 
 * müstakbel maktülün üzerine tikladiginda o kisinin adreslerini görür. 
 * Ayrica eger listedeki kisi dar-ül bekaya irtihal etti ise
 * o kisiyi listede isaretleyecek bir butonda mevcuttur
 *  ve listede ismi daha silik gösterilmelidir.  
 * 
 * Program Analizi:
 * 1) Sayfa üzeride Bootstrap kullanilarak bir HTML yapisi olusturulacak.
 *    Style icin CSS kullanilabilir. Daha sonra bu yapi Template Literaller ile
 *    index html den ayirilacak
 * 2) Bilgilerin depolanacagi bir data modeli olusturalacak
 * 3) Program birbirine bagli 3 bolumden olusturulacak
 * 4) Data verileri Localstorage  kaydedilecek.Gerektiginde silinebilecek(BU KISMI TAMAMLAYAMADIM)
 */

const custumerList = [
  {
    custumerName: 'Umut',
    custumerSurname: 'Gungor',
    deadList: [
      {
        murderName: 'Sel',
        murderSurname: 'Tur',
        description: 'tarihinde fertig',
        statusIsDead: false,
        addresses: [
          'Yildirim Mah' ,
          'Gunes Sokak'
        ]
      },
      {
        murderName: 'mevlut',
        murderSurname: 'bahceli',
        description: 'tarihinde fertig',
        statusIsDead: false,
        addresses: [
          'Yanlis Mah' ,
          'Taraf Sokak'
        ]
      },
      {
        murderName: 'kanik',
        murderSurname: 'tus',
        description: 'tarihinde fertig',
        statusIsDead: false,
        addresses: [
          'Hinc Mah' ,
          'Ay Sokak'
        ]
      },
      {
        murderName: 'Tarik',
        murderSurname: 'Neseli',
        description: 'tarihinde fertig',
        statusIsDead: false,
        addresses: [
          'Yan Mah' ,
          'Akin Sokak'
        ]
      }

    ]
  },
  {
    custumerName: 'Salah',
    custumerSurname: 'Kano',
    deadList: [
      {
        murderName: 'Buray',
        murderSurname: 'Ufo',
        description: 'tarihinde fertig',
        statusIsDead: false,
        addresses: [
          'Yilmaz Mah' ,
          'Guney Sokak'
        ]
      },
      {
        murderName: 'Veli',
        murderSurname: 'Kucuk',
        description: 'tarihinde fertig',
        statusIsDead: false,
        addresses: [
          'Erg Mah' ,
          'Demir Sokak'
        ]
      },
      {
        murderName: 'Monork',
        murderSurname: 'Cafu',
        description: 'tarihinde fertig',
        statusIsDead: false,
        addresses: [
          'Ulucan Mah' ,
          'Teras Sokak'
        ]
      }

    ]
  }
]
