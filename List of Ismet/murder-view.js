document.getElementById('listed-area').addEventListener('click' , function (e) {
  if (e.target.className === 'btn btn-success') {
    let indexCustumer = e.target.id
    showMurderList(custumerList[indexCustumer].deadList , indexCustumer)
  }
})

function showMurderList (pList = [] , pCustumerID) {
  document.getElementById('listed-area').innerHTML = createMurderList(pList , pCustumerID)
}

function createMurderList (pList , pCustumerID) {
  return `
    <section id="morder-list">
      <table class="table table-striped">
        <thead>
          ${createMurderHeader()}
        </thead>
        <tbody>
          ${createMurderInfo (pList, pCustumerID)}
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
      <th scope="col">Is Dead?</th>
      <th scope="col">Explanation</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
    `
}
function createMurderInfo (pList, pCustumerID) {
  return pList.map((murder, index) => `
    <tr>
      <th scope="row">${pCustumerID}</th>
      <th scope="row">${index+1}</th>
      <td>${murder.murderName}</td>
      <td>${murder.murderSurname}</td>
      <td>${murder.statusIsDead}</td>
      <td>${murder.description}</td>
      <td><button type="button" id="${index}" data="${pCustumerID}" class="btn btn-info">Show Adresses!</button></td>
      <td><button type="button" id="${index}" data="${pCustumerID}" class="btn btn-warning">Dead</button></td>
    </tr>
    `).join('')
}
