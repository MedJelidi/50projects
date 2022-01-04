const button = document.querySelector('button')
let container = document.querySelector('.container')
button.addEventListener('click', () => {
    container.remove()
    const heart = document.createElement('div')
    heart.classList.add('heart')
    const thankYou = document.createElement('h4')
    thankYou.innerText = 'Thank You!'
    const feedbackResult = document.createElement('h4')
    feedbackResult.innerText = 'Feedback: Satisfied'
    const info = document.createElement('p')
    info.innerText = `We'll use your feedback to improve our customer support`
    container = document.createElement('div')
    container.classList.add(...['container', 'info'])
    container.append(heart)
    container.append(thankYou)
    container.append(feedbackResult)
    container.append(info)
    document.body.append(container)
})