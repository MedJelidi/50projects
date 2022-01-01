const counter = document.querySelector('.countdown-value')
const infoText = document.querySelector('.info-text')
const replayButton = document.querySelector('button')

startCountdown(5)

async function startCountdown(n) {
    let i = n
    replayButton.hidden = true
    infoText.innerText = 'Get Ready'
    counter.innerText = i
    counter.classList.remove('hide')
    counter.classList.add('show')
    setTimeout(() => {
        counter.classList.remove('pre-anim')
    }, 500)
    const counterInterval = setInterval(() => {
        if (i <= 1) {
            clearInterval(animInterval)
            clearInterval(counterInterval)
            counter.classList.remove('show')
            counter.classList.add('hide')
            infoText.innerText = 'Go'
            replayButton.hidden = false
        }
        counter.innerText = --i
    }, 1000)
    const animInterval = setInterval(() => {
        counter.classList.toggle('animate')
    }, 500)
}

replayButton.addEventListener('click', () => startCountdown(3))