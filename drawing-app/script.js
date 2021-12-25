const canvas = document.getElementById('canv')
const ctx = canvas.getContext('2d')
let size = 10
let drawMode = false
let color = 'black'
const sizeEl = document.getElementById('size')
const plusEl = document.getElementById('plus')
const minusEl = document.getElementById('minus')
const resetEl = document.getElementById('reset')
const colorEl = document.getElementById('color')

canvas.addEventListener('mousedown', (e) => {
  drawMode = true
})

document.addEventListener('mouseup', () => {
  drawMode = false
  ctx.beginPath()
})

document.addEventListener('mousemove', (e) => {
  if (drawMode) {
    ctx.lineWidth = size
    ctx.lineCap = 'round'
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.strokeStyle = color
    ctx.stroke()
  }
})

plusEl.addEventListener('click', () => {
  size++
  sizeEl.innerText = size
})

minusEl.addEventListener('click', () => {
  if (size >= 2) {
    size--
    sizeEl.innerText = size
  }
})

colorEl.addEventListener('change', (e) => {
  color = e.target.value
})

resetEl.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})
