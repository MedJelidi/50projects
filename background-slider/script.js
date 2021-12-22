const images = [
  'https://images.unsplash.com/photo-1593642532400-2682810df593',
  'https://images.unsplash.com/photo-1593642634367-d91a135587b5',
  'https://images.unsplash.com/photo-1640037984424-ac1a02cb742a',
]

let i = 0

const bgImg = document.querySelector('.bg-img')
const carouselImg = document.querySelector('.carousel-img')
bgImg.src = carouselImg.src = images[0]
bgImg.style.filter = 'brightness(50%)'

const leftArrow = document.querySelector('#left-arrow')
const rightArrow = document.querySelector('#right-arrow')

leftArrow.addEventListener('click', () => {
  carouselImg.src = bgImg.src =
    i <= 0 ? images[(i = images.length - 1)] : images[--i]
})

rightArrow.addEventListener('click', () => {
  carouselImg.src = bgImg.src =
    i >= images.length - 1 ? images[(i = 0)] : images[++i]
})
