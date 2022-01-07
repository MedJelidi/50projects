const button = document.querySelector('button')
const screens = document.querySelectorAll('.screen')
const avatars = document.querySelectorAll('.avatar')
const playground = document.querySelector('.playground')
const scoreHolder = document.querySelector('.score')
const minutesHolder = document.querySelector('.minutes')
const secondsHolder = document.querySelector('.seconds')

let score = 0
screens[1].style.top = '100vh'
screens[2].style.top = '100vh'
button.addEventListener('click', () => {
    screens[0].style.top = '-100vh'
    screens[1].style.top = '0'
})

avatars.forEach((a) => {
    a.addEventListener('click', () => {
        const img = a.children[1]
        screens[1].style.top = '-100vh'
        screens[2].style.top = '0'
        addInsect(img)
        let start = Date.now()
        let totalSeconds = 0
        setInterval(() => {
            const delta = Date.now() - start
            let seconds = Math.floor(delta / 1000)
            if (seconds === 60) {
                start = Date.now()
                totalSeconds += seconds
                seconds = 0
                const minutes = Math.floor(totalSeconds / 60)
                minutesHolder.innerText = totalSeconds < 600 ? `0${minutes}` : minutes
            }
            secondsHolder.innerText = seconds < 10 ? `0${seconds}` : seconds
        }, 1000)
    })
})

function getRandomPosition() {
    return Math.random() * 90
}

function addInsect(img) {
    const insect = document.createElement('img')
    insect.src = img.src
    insect.classList.add('avatar-image')
    insect.style.inset = `${getRandomPosition()}% ${getRandomPosition()}% ${getRandomPosition()}% ${getRandomPosition()}%`
    playground.append(insect)
    insect.addEventListener('click', () => {
        insect.remove()
        score++;
        scoreHolder.innerHTML = score
        addInsect(img)
        addInsect(img)
    })
}