function handleDragStart (e) {
  this.style.opacity = '0.4'

  dragSource = this

  e.dataTransfer.effectAllowed = 'move'
  e.dataTransfer.setData('text/html', this.innerHTML)
}

function handleDragOver (e) {
  if (e.preventDefault) {
    e.preventDefault()
  }
  e.dataTransfer.dropEffect = 'move'
}

function handleDragEnter (e) {
  this.classList.add('over')
}

function handleDragLeave (e) {
  this.classList.remove('over')
}

function handleDrop (e) {
  if (dragSource != this) {
    dragSource.innerHTML = this.innerHTML
    this.innerHTML = e.dataTransfer.getData('text/html')
  }
}

function handleDragEnd (e) {
  this.style.opacity = '1'

  kelimeler.forEach(function (item) {
    item.classList.remove('over')
  })
}

function dragAndDropMain () {
  kelimeler.forEach(function (item) {
    item.addEventListener('dragstart', handleDragStart)
    item.addEventListener('dragenter', handleDragEnter)
    item.addEventListener('dragover', handleDragOver)
    item.addEventListener('dragleave', handleDragLeave)
    item.addEventListener('drop', handleDrop)
    item.addEventListener('dragend', handleDragEnd)
  })
}
