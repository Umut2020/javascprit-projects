// 
function addUser (pEvent) {
  pEvent.preventDefault(); // submit yapma!
  personList.push(getPerson())
  renderUI(personList)
}

// Ekrana guncel tabloyu yansitan fonksiyon
function renderUI (pList) {
  document.getElementById('player-table').innerHTML = createTable(pList)
}

// Oyuncu tablosunu olusturan fonksiyon
function createTable (pList) {
  let table = `
        <table class="table">
          <thead>
               <tr>
                 <th scope="col">#</th>
                 <th scope="col">First Name</th>
                 <th scope="col">Last Name</th>
                 <th scope="col">Toplam Puan</th>
                 <th scope="col"></th>
               </tr>
            </thead>
          <tbody>
          ${createPlayer(pList)}
          </tbody>
        </table>
        <div class="d-flex justify-content-center" >
        <button type="button" class="btn btn-success">Start</button>
        </div>  
          `
  return table
}

// Oyuncu verilerini olusturan fonksiyon
function createPlayer (pList) {
  let player =
  pList.map((person, index) => `
      <tr>
        <th scope="row">${index+1}</th>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td id="${index}">${person.totalScore}</td>
        <td> <button type="button" id="${index}" class="btn btn-danger">Remove</button></td>
      </tr>
      `).join('')

  return player
}

// Oyunculari listeden silen fonksiyon
function remove (e) {
  let clickedElement = e.target
  if (clickedElement.className.toLowerCase() === 'btn btn-danger') {
    personList.splice(clickedElement.id, 1)
  }
  renderUI(personList)
}

// 0 ve 10 arasında random sayı üretir.
function randomNummer () {
  let randomSayi = (Math.floor(Math.random() * 11))
  return randomSayi
}

// start butonuna basildiginda oyunu baslatir
function startGame (e) {
  let clickedElement = e.target
  if (clickedElement.className.toLowerCase() === 'btn btn-success') {
    let promptSiraNumarasi = prompt('Lutfen oyuncu sira numaranizi giriniz')
    setTimeout(timer , 10000)
    alertTimeStart()
    checkAndScore(promptSiraNumarasi - 1)
    refreshGameArea()
  }

  renderUI(personList)
}

// Oyun basladiktan 10 saniyelik surenin basladigiini belirten fonksiyon
function alertTimeStart () {
  document.getElementById('time').innerHTML = '10 saniyelik sureniz basladi'
}

// Oyun basladiktan 10 saniye sonra ekrana alert gonderir
function timer () {
  document.getElementById('time').innerHTML = 'Sureniz doldu'
  Swal.fire({
    title: 'Sureniz doldu. Tablodan puaninizi kontrol edebilirsiniz.'

  })
}

// 10 saniye boyunca yeni sorularin gelmesini saglayan fonksiyon
function refreshGameArea () {
  firstNummer = randomNummer()
  secondNummer = randomNummer()
  firstNumberElement.innerHTML = firstNummer
  secondNumberElement.innerHTML = secondNummer
}

/**
 * Check butonu ile ekrani girilen degeri kontrol eder ve
 * her dogru cevap icin oyuncunun puanini 10 artirir
 */
function checkAndScore (playerIndex) {
  document.getElementById('check-btn').addEventListener('click', function (e) {
    let playerInput = document.getElementById('input-player').value
    if (playerInput == firstNummer * secondNummer) {
      personList[playerIndex].totalScore += 10
    }
    refreshGameArea()
    renderUI(personList)
  })
}
