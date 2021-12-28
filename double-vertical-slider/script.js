const lefties = document.querySelectorAll('.left-element')
const leftArrow = document.querySelector('.left-arrow')
const righties = document.querySelectorAll('.right-element')
const rightArrow = document.querySelector('.right-arrow')
const leftContainer = document.querySelector('.left-container')
const rightContainer = document.querySelector('.right-container')

righties.forEach((r, k) => {
  r.innerHTML = `<img src='https://picsum.photos/id/${50 + k}/1000'/>`
})

let activeIndex = 0
rightContainer.style.transform = `translateY(${-(righties.length - 1) * 100}%)`

function slide(direction) {
  if (direction === 'up') {
    if (activeIndex <= 0) {
      activeIndex = lefties.length - 1
    } else {
      activeIndex--
    }
  } else {
    if (activeIndex >= lefties.length - 1) {
      activeIndex = 0
    } else {
      activeIndex++
    }
  }
  leftContainer.style.transform = `translateY(-${activeIndex * 100}%)`
  rightContainer.style.transform = `translateY(-${
    (righties.length - 1 - activeIndex) * 100
  }%)`
}

leftArrow.addEventListener('click', () => slide('down'))
rightArrow.addEventListener('click', () => slide('up'))
