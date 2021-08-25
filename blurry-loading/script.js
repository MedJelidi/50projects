const percent = document.getElementById('percent')
const bgImg = document.querySelector('.bg-img')

let i = 0;
let f = 10;
let o = 1;

const interval = setInterval(() => {
    if (i <= 100) {
        percent.innerHTML = (i++) + '%'
        f = f - 0.1
        o = o - 0.01
        bgImg.style.filter = `blur(${(f)}px)`
        percent.style.opacity = `${o}`
    }
    else clearInterval(interval)
}, 30)
