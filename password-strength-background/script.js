const passInput = document.getElementById('password')
const backImg = document.querySelector('.back-img')

passInput.addEventListener('input', () => {
    if (passInput.value.length > 10) return
    backImg.setAttribute('style', `filter: blur(${10 - passInput.value.length}px);-webkit-filter: blur(${10 - passInput.value.length}px);`)
})