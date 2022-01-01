const container = document.querySelector('.container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

for (let i = 0; i < 500; i++) {
    const box = document.createElement('div')
    box.classList.add('box')
    box.addEventListener('mouseover', () => setColor(box))
    box.addEventListener('mouseout', () => removeColor(box))
    container.append(box)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}