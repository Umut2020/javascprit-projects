document.querySelector('#btn-primary').addEventListener('click', function () {
  spaceController()
  if (dogrulamaHatasiRender()) {
    let person = getPerson()
    addPersonToList(person)
    renderUI(tableList)
  }else {
    alert('verilerinizi kontrol ediniz')
  }
})

const tableList = []

document.querySelector('#table-list').addEventListener('click' , function (e) {
  let clickedElementinTabble = e.target
  if (clickedElementinTabble.tagName.toLowerCase() === 'button') {
    let index = parseInt(clickedElementinTabble.id)
    removeFromTableList(index)
  }
})
