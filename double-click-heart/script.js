const image = document.querySelector('.image')
const heartElem = document.querySelector('.heart')
const likesElem = document.querySelector('span')
let likes = 0
image.addEventListener('dblclick', (e) => {
    console.log(e.offsetY, e.offsetX)
    const heart = document.createElement('div')
    if (image.hasChildNodes()) image.removeChild(image.childNodes[0])
    heart.classList.add('heart')
    heart.style.top = (e.offsetY - 16) + 'px'
    heart.style.left = (e.offsetX - 16) + 'px'
    image.append(heart)
    likesElem.innerText = ++likes
})