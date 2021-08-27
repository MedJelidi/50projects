const events = document.querySelectorAll('.event')
const info = document.querySelector('.info')
const boxes = document.querySelectorAll('.ev-box')

document.addEventListener('keypress', (e) => {
    showBoxes()
    boxes[0].innerHTML = e.key
    boxes[1].innerHTML = e.keyCode
    boxes[2].innerHTML = e.code
    console.log(e)
})

function showBoxes() {
    info.classList.add('hide')
    events.forEach(e => {
        e.classList.add('show')
    })
}
