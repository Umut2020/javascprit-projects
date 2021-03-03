const personList = []
const personListContainer = document.getElementById('personList')
const addBtn = document.getElementById('add-btn')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const address = document.getElementById('address')
function renderPersonList () {
  personListContainer.innerHTML = personList.map(person => {
    return `<tr>
                    <td>${person.firstName}</td>
                    <td>${person.lastName}</td>
                    <td>${person.address}</td>
                    <td><button id="${person.id}">Sil</button></td>
                </tr>`
  }).join('')
}
function getPersonListFromLocalStorage () {
  for (let i = 0; i < localStorage.length; i++) {
    const personKey = localStorage.key(i)
    const personString = localStorage.getItem(personKey)
    const personObject = JSON.parse(personString)
    personList.push(personObject)
  }
  renderPersonList()
}
addBtn.addEventListener('click', function (e) {
  e.preventDefault()
  const id = uuidv4()
  const myObj = {
    id: id,
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value
  }
  myJSON = JSON.stringify(myObj)
  localStorage.setItem(id, myJSON)
  personList.push(myObj)
  renderPersonList()
})
getPersonListFromLocalStorage()
