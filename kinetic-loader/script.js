const triangle1 = document.getElementById('triangle-1')
const triangle2 = document.getElementById('triangle-2')

let deg1 = 0
let deg2 = 90
let aux = false
let t1 = 0
let t2 = 2.5

setInterval(() => {
  setTimeout(() => {
    triangle1.style.transform = `rotate(${(deg1 += 180)}deg) translate3d(0, ${
      t1 ? (t1 = 0) : (t1 = 5)
    }em, 0)`
    setTimeout(() => {
      triangle2.style.transform = `rotate(${(deg2 += 180)}deg) translate3d(${
        t2 === 2.5 ? (t2 = -2.5) : (t2 = 2.5)
      }em, 2.5em, 0)`
    }, 1000)
  }, 1000)
}, 2000)
