const menuIconOpen = document.querySelector('.menu-icon-open')
const menuIconClose = document.querySelector('.menu-icon-close')
const mainWrapper = document.querySelector('.main-wrapper')

menuIconOpen.addEventListener('click', () => {
    menuIconOpen.style.top = '-37px'
    menuIconOpen.style.left = '58px'
    menuIconOpen.style.transform = 'rotate(-90deg)'
    menuIconClose.style.top = '35px'
    menuIconClose.style.left = '26px'
    menuIconClose.style.transform = 'rotate(-90deg)'
    mainWrapper.style.transform = 'rotateZ(-20deg)'
})

menuIconClose.addEventListener('click', () => {
    menuIconOpen.style.top = '35px'
    menuIconOpen.style.left = '26px'
    menuIconOpen.style.transform = 'rotate(0deg)'
    menuIconClose.style.top = '65px'
    menuIconClose.style.left = '-28px'
    menuIconClose.style.transform = 'rotate(0deg)'
    mainWrapper.style.transform = 'rotateZ(0deg)'
})
