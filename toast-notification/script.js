const notifButton = document.getElementById('notif-button')
const notifSection = document.querySelector('.notif-section')
const randomColors = [
  'red',
  'yellow',
  'green',
  'black',
  'brown',
  'pink',
  'blue',
  'violet',
  'gray',
]
let msgIndex = 0

notifButton.addEventListener('click', () => addBox())

function addBox() {
  const newBox = document.createElement('button')
  newBox.classList.add('notif-box')
  newBox.innerText = `Message ${++msgIndex}`
  newBox.style.color =
    randomColors[Math.floor(Math.random() * randomColors.length)]
  notifSection.append(newBox)
  setTimeout(() => newBox.remove(), 5000)
}
