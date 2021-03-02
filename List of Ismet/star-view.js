showStartView(custumerList)

function showStartView (pList = []) {
  document.getElementById('listed-area').innerHTML = createStartView(pList)
  showNewCustumerView()
}

function createStartView (pCustumerList) {
  return `
  <section id="costumer-list">
    <table class="table table-striped">
      <thead>
          ${createCustumerHeader()}
      </thead>
      <tbody>
          ${createCustumerNameTable (pCustumerList)}
          ${createNewCustumerName()}
      </tbody>
    </table>
  </section>
  `
}

function createCustumerHeader () {
  return `
  <tr>
    <th scope="col">Cus.ID.</th>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col"></th>
  </tr>
  `
}

function createCustumerNameTable (pCustumerNameList) {
  return pCustumerNameList.map((custumer, index) => `
  <tr>
    <th scope="row">${index}</th>
    <td>${custumer.custumerName}</td>
    <td>${custumer.custumerSurname}</td>
    <td><button type="button" id="${index}" class="btn btn-success">Show me!</button></td>
  </tr>
  `).join('')
}

function createNewCustumerName () {
  return `
  <tr>
   <td colspan="4">
      <div id="input-new-custumer" class="input-group">
          <input type="text" aria-label="First name" id="cus-name"  value="" placeholder="Name" class="form-control">
          <input type="text" aria-label="Last name" id="cus-surname"  value="" placeholder="Surname" class="form-control">
          <input type="text" aria-label="First name" id="mur-name"  value="" placeholder="MurderName" class="form-control">
          <input type="text" aria-label="Last name" id="mur-surname"  value="" placeholder="MurderSurname" class="form-control">
          <input type="text" aria-label="First name" id="explation"  value="" placeholder="Explanation"
              class="form-control">
          <input type="text" aria-label="Last name" id="address" value="" placeholder="Adress" class="form-control">
          <button type="button" id="btn-new-custumer" class="btn btn-primary">Add New Custumer</button>
      </div>
    </td>
  </tr>
  `
}

function showNewCustumerView () {
  document.getElementById('btn-new-custumer').addEventListener('click' , function (e) {
    addNewCustumer()
    showStartView(custumerList)
  })
}

function addNewCustumer () {
  let custumerName = document.querySelector('#cus-name').value
  let custumerSurname = document.querySelector('#cus-surname').value
  let murderName = document.querySelector('#mur-name').value
  let murderSurname = document.querySelector('#mur-surname').value
  let murderExp = document.querySelector('#explation').value
  let murderAddress = document.querySelector('#address').value
  let murderStatus = false
  custumerList.push({
    custumerName: `${custumerName}`,
    custumerSurname: `${custumerSurname}`,
    deadList: [
      {
        murderName: `${murderName}`,
        murderSurname: `${murderSurname}`,
        description: `${murderExp}`,
        statusIsDead: `${murderStatus}`,
        addresses: [
          `${murderAddress}`

        ]
      }

    ]
  }
  )
}
