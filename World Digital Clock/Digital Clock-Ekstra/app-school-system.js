document.querySelector('#btn-primary').addEventListener('click', addUser)

function addUser (pEvent) {
  let person = getPerson()
  addPersonToList(person)
  renderUI(tableList)
  pEvent.preventDefault()
  spaceController()
}
const tableList = []

document.querySelector('#table-list').addEventListener('click' , function (e) {
  let clickedElementinTabble = e.target
  if (clickedElementinTabble.tagName.toLowerCase() === 'button') {
    let index = parseInt(clickedElementinTabble.id)
    removeFromTableList(index)
  }
})
