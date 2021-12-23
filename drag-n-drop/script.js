const boxes = document.querySelectorAll('.box')
// To only drag the box that has the image
let correctDrag = false
boxes.forEach((b, i) => {
  b.draggable = false
  b.dataset.index = i
  // When a dragged box image enters another box
  b.addEventListener('dragenter', (e) => {
    if (correctDrag) b.classList.add('hovered')
  })
  // When a dragged box image leaves another box
  b.addEventListener('dragleave', () => {
    b.classList.remove('hovered')
  })
})

function createImg() {
  const img = document.createElement('img')
  img.src = 'https://picsum.photos/154/154'
  img.draggable = true
  return img
}
// Default
const img = createImg()
boxes[0].append(img)

// When the box that contains the image starts to get dragged
img.ondragstart = (ev) => {
  ev.dataTransfer.setData('previous_box_index', img.parentElement.dataset.index)
  correctDrag = true
  img.classList.add('invisible')
}

// When the box that contains the image stops getting dragged
img.ondragend = () => {
  img.classList.remove('invisible')
}

function allowDrop(ev) {
  ev.preventDefault()
}

// When the image gets dropped to another box (every box should have this function)
function drop(ev) {
  ev.preventDefault()
  const prevBoxindex = ev.dataTransfer.getData('previous_box_index')

  // Checks whether the drag source is the same as the drag destination
  // (do not do anything if it is)
  if (
    img.parentElement.dataset.index !== ev.target.parentElement.dataset.index &&
    boxes[prevBoxindex]
  ) {
    boxes[prevBoxindex].removeChild(img)
    boxes[prevBoxindex].classList.remove('hovered')
    ev.target.appendChild(img)
    ev.target.classList.remove('hovered')
    correctDrag = false
  }
}
