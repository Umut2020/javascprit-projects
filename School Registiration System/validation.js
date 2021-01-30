function dogrulama () {
  function ogrenciIsmiBulma () {
    let ogrenciIsmi = nameElement.value
    if (ogrenciIsmi === '') {
      alert('Lutfen Name kismina bir deger giriniz')
      return false
    }else {
      return true
    }
  }
  function ogrenciSoyismiBulma () {
    let ogrenciSoyIsmi = snameElement.value
    if (ogrenciSoyIsmi === '') {
      alert('Lutfen Surname kismina bir deger giriniz')
      return false
    }else {
      return true
    }
  }
  function ogrenciYasiniBulma () {
    let ogrenciAge = parseInt(ageElement.value)
    console.log(ogrenciAge)
    if (0 < ogrenciAge && ogrenciAge < 200) {
      return true
    }else {
      alert('Lutfen Age kismina gecerli bir yas degeri giriniz')
      return false
    }
  }

  if ((ogrenciIsmiBulma() && ogrenciSoyismiBulma()) && ogrenciYasiniBulma()) {
    dogrulamaDegeri = true
  }
}
