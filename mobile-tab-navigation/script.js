const images = document.querySelectorAll('img')
const menuItems = document.querySelectorAll('.menu-item')

let activeElement = 0

menuItems.forEach((m, k) => {
    m.addEventListener('click', () => {
        if (k === activeElement) return
        images[k].classList.add('active')
        m.classList.add('active')
        images[activeElement].classList.remove('active')
        menuItems[activeElement].classList.remove('active')
        activeElement = k
    })
})