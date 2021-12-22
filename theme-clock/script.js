const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
const hours = document.getElementById('hours')
const date = new Date()
let secDeg = 360 + date.getSeconds() * 6
seconds.style.transform = `rotate(${secDeg}deg)`
let minDeg = 360 + date.getMinutes() * 6
minutes.style.transform = `rotate(${minDeg}deg)`
let hourDeg = 360 + date.getHours() * 6
hours.style.transform = `rotate(${hourDeg}deg)`

let eachMinute = 60000 - date.getSeconds() * 1000
let eachHour = 3600000 - date.getMinutes() * 1000

function updateTime() {
  const timeNow = new Date().toString().substring(16, 21)
  time.innerText = timeNow + (+timeNow.substring(0, 2) > 12 ? ' PM' : ' AM')
}

setInterval(() => {
  //   console.log(new Date().getSeconds())
  seconds.style.transform = `rotate(${(secDeg += 6)}deg)`
}, 1000)

const minHandler = function () {
  minutes.style.transform = `rotate(${(minDeg += 6)}deg)`
  eachMinute = 60000
  updateTime()
  setTimeout(minHandler, eachMinute)
}
setTimeout(minHandler, eachMinute)

const hourHandler = function () {
  console.log('hhhhhhhh')
  hours.style.transform = `rotate(${(hourDeg += 6)}deg)`
  eachHour = 3600000
  updateTime()
  setTimeout(hourHandler, eachHour)
}
setTimeout(hourHandler, eachHour)

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const time = document.getElementById('time')
updateTime()
const fullDate = document.getElementById('date')
fullDate.innerText = `${days[date.getDay()]}, ${
  months[date.getMonth()]
}, ${date.getDay()}`

const mode = document.querySelector('.mode')
const clockContainer = document.querySelector('.clock-container')
const smallCircle = document.getElementById('circle')
mode.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  mode.classList.toggle('dark-button')
  clockContainer.classList.toggle('clock-container-dark')
  minutes.classList.toggle('needle-dark')
  hours.classList.toggle('needle-dark')
  smallCircle.classList.toggle('needle-dark')
})
