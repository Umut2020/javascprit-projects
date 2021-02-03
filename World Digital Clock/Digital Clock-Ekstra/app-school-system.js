document.querySelector('#btn-primary').addEventListener('click', addUser)

function addUser (pEvent) {
  let person = getPerson()
  addPersonToList(person)
  renderUI(tableList)
  pEvent.preventDefault()
}
const tableList = []
