const firstNameElement = document.querySelector('#exampleInputEmail1')
const lastNameElement = document.querySelector('#exampleInputEmail2')
const ageElement = document.querySelector('#exampleInputEmail3')

function errorInBox (input , message) {
  input.className = 'form-control is-invalid'
  const div = input.nextElementSibling
  div.innerText = message
  div.className = 'invalid-feedback'
}
function succesInBox (input) {
  input.className = 'form-control is-valid'
}

let isim = ''
let soyisim = ''
let yas = ''

function spaceController () {
  if (!isNotEmpty(firstNameElement.value)) {
    errorInBox(firstNameElement, 'Bu alan bos birakilamaz')
    isim = false
  }else {
    succesInBox(firstNameElement)
    isim = true
  }
  if (!isNotEmpty(lastNameElement.value)) {
    errorInBox(lastNameElement, 'Bu alan bos birakilamaz')
    soyisim = false
  }else {
    succesInBox(lastNameElement)
    soyisim = true
  }
  if (!isNotEmpty(ageElement.value)) {
    errorInBox(ageElement , 'Bu alan bos birakilamaz')
    yas = false
  }else if (!isNumber(ageElement.value)) {
    errorInBox(ageElement , 'yas icin sadece rakam kullaniniz')
    yas = false
  }else {
    succesInBox(ageElement)
    yas = true
  }
}

function dogrulamaHatasiRender () {
  if ((isim === true) && (soyisim === true) && (yas === true)) {
    return true
  }else {
    return false
  }
}

function isNotEmpty (input) {
  var pattern = /\S+/
  return pattern.test(input) // returns a boolean
}

function isNumber (input) {
  var pattern = /^\d+$/
  return pattern.test(input) // returns a boolean
}
