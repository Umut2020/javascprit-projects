function addToListe () {
  ogrenciEklemeConteinerElementi.addEventListener('click' , function (e) {
    dogrulama()
    let tiklananEleman = e.target.tagName
    if (tiklananEleman.toLowerCase() === 'button' && (dogrulamaDegeri === true)) {
      counter++
      ogrenciListelemeConteinerElementi.innerHTML += creatTable()
      toplama()
    }
  })
}

function creatTable () {
  return `
    <table>
      ${creatListe()}
    </table>
      `
}

function toplama () {
  toplamOgrenciElementi.innerHTML = `<tr>
    <h5>Toplam Ogrenci Sayisi : ${counter}</h5>`
}

function creatListe () {
  return `
    <tr>
      <td>${ nameElement.value }</td>
      <td>${ snameElement.value }</td>
      <td>${ ageElement.value }</td>
      <td><button id="${counter}" >sil</button></td>
    </tr>
    `
}

function removeButtonIdBulma () {
  ogrenciListelemeConteinerElementi.addEventListener('click' , function (e) {
    let idButton = ''
    if (e.target.tagName.toLowerCase() === 'button') {
      idButton = e.target.id
      counter--
      toplama()
    }
    removeListe(idButton)
  })
}

function removeListe (pIndex) {
  let removeButton = document.getElementById(pIndex)
  removeButton.parentElement.parentElement.remove()
}
