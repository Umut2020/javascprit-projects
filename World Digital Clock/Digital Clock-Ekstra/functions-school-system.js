function getPerson () {
  let firstName = document.querySelector('#exampleInputEmail1').value
  let lastName = document.querySelector('#exampleInputEmail2').value
  let age = document.querySelector('#exampleInputEmail3').value

  return {
    firstName: firstName,
    lastName: lastName,
    age: age
  }
}

function addPersonToList (pPerson) {
  tableList.push(pPerson)
}

function getPersonTotal (pList) {
  return pList.length
}

function createPersonList (pList) {
  let personRows =
  pList.map(person => `
    <tr>
        <td>${person.firstName} </td>
        <td>${person.lastName}</td>
        <td>${person.age}</td>
        <td><button type="button" class="btn btn-danger">Sil</button></td>
    </tr>
        `).join('')

  return personRows
}

function createTable (pList) {
  let table = `
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Isim</th>
        <th scope="col">Soyisim</th>
        <th scope="col">Age</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      ${createPersonList (pList)}
      <tr>
        <th colspan="4">
          Toplam Ogrenci Sayisi :${getPersonTotal(pList)}
        </th>
      </tr>
    </tbody>
  </table>
    `
  return table
}

function renderUI (pList = []) {
  document.querySelector('#table-list').innerHTML = createTable(pList)
}
