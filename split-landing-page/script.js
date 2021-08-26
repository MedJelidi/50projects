const ps5 = document.querySelector('.ps5')
const xbox = document.querySelector('.xbox')

ps5.addEventListener('mouseenter', () => {
    xbox.style.width = '25%'
    ps5.style.width = '75%'
})

xbox.addEventListener('mouseenter', () => {
    xbox.style.width = '75%'
    ps5.style.width = '25%'
})

ps5.addEventListener('mouseleave', () => onLeave())

xbox.addEventListener('mouseleave', () => onLeave())

function onLeave() {
    xbox.style.width = '50%'
    ps5.style.width = '50%'
}
