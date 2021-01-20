function renderAllProducts () {
  const productTable = document.getElementById('urunler')
  productTable.innerHTML = ''
  productList.forEach((urun) => {
    productTable.innerHTML += `
      <tr>
        <th>${urun.productName}</th>
        <th>${urun.price}</th>
        <th>${urun.expireDate.toDateString()}</th>
        <th>${urun.totalCalories}</th>
        <th><img src="${urun.productImage}"
        alt="${urun.productName}"></td></th>
        <th><button type="button" class="btn btn-primary">Buy</button></th>
      </tr>
        `
  })
}

function sepeteUrunEkleme () {
  let buton = document.querySelectorAll('.btn-primary')

  for (let index = 0; index < buton.length; index++) {
    buton[index].addEventListener('click' , function (e) {
      sepetTable.innerHTML += `  
      <tr>
          <th>${buton[index].parentNode.parentNode.firstElementChild.textContent}</th>
         <th>${buton[index].parentNode.parentNode.firstElementChild.nextElementSibling.textContent}</th>
          <th><img src="${buton[index].parentNode.parentNode.lastElementChild.previousElementSibling.firstElementChild.getAttribute('src')}"></th>
          <th><button id="de" type="button" class="btn btn-danger">Sil</button></th>
      </tr>
          `
      totalPrice += Number(buton[index].parentNode.parentNode.firstElementChild.nextElementSibling.textContent)
      toplamTutar()
      sepettenUrunSilme()
      bosSepetYazisiniKaldirma()
    })
  }
}

function toplamTutar () {
  let totalFiyatElement = document.getElementById('toplama ekrani')
  totalFiyatElement.innerHTML = `
  <h4>Toplam Alisveris Tutari : ${totalPrice.toFixed(2)} CH </h4>`
}

function sepettenUrunSilme () {
  let silmeElementi = document.querySelectorAll('.btn-danger')
  silmeElementi.forEach(element => {
    element.addEventListener('click' , function (e) {
      totalPrice -= parseFloat(element.parentElement.previousElementSibling.previousElementSibling.textContent)
      toplamTutar()
      element.parentNode.parentNode.remove()
    })
  })
}

function bosSepetYazisiniKaldirma () {
  const bosSepetElement = document.getElementById('bos-sepet')
  if (sepetTable.children.length > 1) {
    bosSepetElement.remove()
  }
}
