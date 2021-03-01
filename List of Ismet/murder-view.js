document.getElementById('listed-area').addEventListener('click' , function (e) {
  if (e.target.className === 'btn btn-success') {
    let indexCustumer = e.target.id
    showMurderList(custumerList[indexCustumer].deadList , indexCustumer)
  }
})

function showMurderList (pList = [] , custumerID) {
  document.getElementById('listed-area').innerHTML = createMurderList(pList , custumerID)
}

function createMurderList (pList , custumerID) {
  return `
    <section id="morder-list">
      <table class="table table-striped">
        <thead>
          ${createMurderHeader()}
        </thead>
        <tbody>
          ${createMurderInfo (pList, custumerID)}
        </tbody>
      </table>
    </section>
    `
}

function createMurderHeader () {
  return `
    <tr>
      <th scope="col">Cus. Id.</th>
      <th scope="col">Dead Num.</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Explanation</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
    `
}
function createMurderInfo (pList, custumerID) {
  return pList.map((murder, index) => `
    <tr>
      <th scope="row">${custumerID}</th>
      <th scope="row">${index+1}</th>
      <td>${murder.murderName}</td>
      <td>${murder.murderSurname}</td>
      <td>${murder.description}</td>
      <td><button type="button" id="${index}" data="${custumerID}" class="btn btn-info">Show Adresses!</button></td>
      <td><button type="button" class="btn btn-warning">Dead</button></td>
    </tr>
    `).join('')
}
