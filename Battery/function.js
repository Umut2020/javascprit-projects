function gostergeEkraniDuzenleyici () {
  if (sayac === 0) {
    gosterge.innerHTML = '%0(BOS)'
    alt.style.backgroundColor = 'white'
    orta.style.backgroundColor = 'white'
    ust.style.backgroundColor = 'white'
  }else if (sayac === 1) {
    gosterge.innerHTML = '%33'
    alt.style.backgroundColor = 'red'
    orta.style.backgroundColor = 'white'
    ust.style.backgroundColor = 'white'
  }else if (sayac === 2) {
    gosterge.innerHTML = '%66'
    alt.style.backgroundColor = 'orange'
    orta.style.backgroundColor = 'orange'
    ust.style.backgroundColor = 'white'
  }else if (sayac === 3) {
    gosterge.innerHTML = '%100(Full)'
    alt.style.backgroundColor = 'green'
    orta.style.backgroundColor = 'green'
    ust.style.backgroundColor = 'green'
  }else if (sayac >= 4) {
    sayac = 3
  }else if (sayac <= -1) {
    sayac = 0
  }
}
