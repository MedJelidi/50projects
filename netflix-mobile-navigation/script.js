const menuIcon = document.querySelector('.menu-icon')
const wrappers = document.querySelectorAll('.white, .red, .black')
const closeIcon = document.querySelector('.close')
menuIcon.addEventListener('click', () => showOrHide(false))
closeIcon.addEventListener('click', () => showOrHide(true))

function showOrHide(hide) {
    if (hide) {
        wrappers.forEach((w) => {
            w.classList.add('hide-wrappers')
            w.classList.remove('unhide-wrappers')
        })
        menuIcon.classList.add('s-menu')
        menuIcon.classList.remove('h-menu')
    } else {
        wrappers.forEach((w) => {
            w.classList.remove('hide-wrappers')
            w.classList.add('unhide-wrappers')
        })
        menuIcon.classList.add('h-menu')
        menuIcon.classList.remove('s-menu')
    }
}