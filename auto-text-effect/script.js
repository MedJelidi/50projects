const text = 'We Love Programming!'
const speed = document.querySelector('input')
const statement = document.querySelector('.statement')
let interval
let i = 1
autoTextWithSpeed(1)

function autoTextWithSpeed(n) {
    interval = setInterval(() => {
        if (i > text.length) {
            i = 0
        } else {
            statement.innerText = text.slice(0, i++)
        }
    }, Math.floor(300 / n))
}

speed.addEventListener('change', () => {
    clearInterval(interval)
    autoTextWithSpeed(speed.value)
})