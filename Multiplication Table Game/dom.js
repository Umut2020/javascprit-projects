let checkButton = document.getElementById('check-btn')
let firstNumberElement = document.getElementById('first-number')
let secondNumberElement = document.getElementById('second-number')

document.querySelector('#btn-add-register').addEventListener('click', addUser)

document.getElementById('player-table').addEventListener('click', function (e) {
  remove(e)
  startGame(e)
})
