document.getElementById('listed-area').addEventListener('click' , function (e) {
  if (e.target.className === 'btn btn-info') {
    let murderIndex = e.target.id
    let custemerIndex = e.target.getAttribute('data')
    showMurderAddressList(custumerList[custemerIndex].deadList[murderIndex].addresses)
  }
})

function showMurderAddressList (pList = []) {
  document.getElementById('listed-area').innerHTML = createMurderAddressList(pList)
}

function createMurderAddressList (pList) {
  return `
  <section id='address-list'>
    <table class='table table-striped'>
        <thead>
            ${murderAddressHeader()}
        </thead>
        <tbody>
            ${murderAddressList(pList)}
        </tbody>
    </table>
  </section>
  `
}

function murderAddressHeader () {
  return `
    <tr>
        <th scope="col">#</th>
        <th scope="col">Maktulun Adresleri</th>
        <th></th>
        <th></th>
    </tr>
    `
}

function murderAddressList (pList) {
  return pList.map((address, index) => `
    <tr>
        <th scope="row">${index+1}</th>
        <td>${address}</td>
        <td><button type="button" class="btn btn-secondary">New Aderes</button></td>
        <td><button type="button" class="btn btn-danger">Delete Adress</button></td>
    </tr>
    `).join('')
}

// function newMurderAddressList () {

// }
