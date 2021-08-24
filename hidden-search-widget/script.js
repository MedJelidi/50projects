const iconContainer = document.querySelector('.icon-container')
const container = document.querySelector('.container')
const input = document.querySelector('input')

iconContainer.addEventListener('click', () => {
    container.classList.toggle('with-input')
    input.focus()
})
