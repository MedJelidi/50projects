const chevs = document.querySelectorAll('.fa-chevron-down')
const times = document.querySelectorAll('.fa-times-circle')
const boxes = document.querySelectorAll('.box')

for (let i = 0; i < times.length; i++) {
    chevs[i].addEventListener('click', () => {
        chevs[i].classList.toggle('active')
        times[i].classList.toggle('active')
        boxes[i].classList.toggle('act-box')
    })
    times[i].addEventListener('click', () => {
        chevs[i].classList.toggle('active')
        times[i].classList.toggle('active')
        boxes[i].classList.toggle('act-box')
    })
}
