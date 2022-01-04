const circle = document.querySelector('.circle')
const bar = document.querySelector('.bar')
const indicator = document.querySelector('.indicator')

function slide(e) {
    console.log(e)
    if (e.clientX >= 325 && e.clientX <= 600) {
        circle.style.transform = indicator.style.transform = `translateX(${e.clientX - 325}px)`
        indicator.innerText = Math.floor((e.clientX - 325) / 3)
    }
}

circle.addEventListener('mousedown', () => {
    document.body.addEventListener('mousemove', slide)
})

document.body.addEventListener('mouseup', () => {
    document.body.removeEventListener('mousemove', slide)
})

bar.addEventListener('click', (e) => {
    slide(e)
})