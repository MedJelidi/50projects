const imagesLen = document.querySelectorAll('.image').length
const gallery = document.querySelector('.gallery')
const prevButton = document.getElementById('prev-button')
const nextButton = document.getElementById('next-button')
let checkpoint = 0
let paused = false
const step = -((imagesLen - 1) * (100 / imagesLen))

const interval = setInterval(() => {
    if (!paused) {
        checkpoint = checkpoint <= step ? 0 : checkpoint - (100 / imagesLen)
        console.log(checkpoint)
        gallery.style.transform = `translateX(${checkpoint}%)`
    }
}, 2000)

console.log(-(imagesLen * (100 / (imagesLen + 1))))

function changeImageTo(direction) {
    paused = true
    if (direction === 'right') {
        checkpoint = checkpoint <= step ? 0 : checkpoint - (100 / imagesLen)
    } else {
        checkpoint = checkpoint >= 0 ? step : checkpoint + (100 / imagesLen)
    }
    gallery.style.transform = `translateX(${checkpoint}%)`
    paused = false
}

prevButton.addEventListener('click', () => changeImageTo('left'))
nextButton.addEventListener('click', () => changeImageTo('right'))