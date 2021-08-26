const boxes = document.querySelectorAll('.box')

for (let i = 0; i < boxes.length;  i++) {
    boxes[i].addEventListener('click', () => {
        const sound = document.getElementById(`sound${i}`)
        sound.play()
        stopOthers(i)
    })
}

function stopOthers(j) {
    for (let i = 0; i < boxes.length; i++) {
        if (i !== j) {
            const sound = document.getElementById(`sound${i}`)
            sound.load()
            sound.pause()
        }
    }
}
