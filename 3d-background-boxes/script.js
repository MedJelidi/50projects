const button = document.querySelector('button')
button.addEventListener('click', () => {
    container.classList.toggle('big')
})

const container = document.querySelector('.container')

function createBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * 120}px ${-i * 120}px`
            container.append(box)
        }
    }
}

createBoxes()