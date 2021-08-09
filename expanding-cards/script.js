let notSelectedImgs = document.querySelectorAll('.image')

notSelectedImgs.forEach(img => {
    img.addEventListener('click', () => {
        removeActive()
        img.classList.add('selected')
    })
})

function removeActive() {
    notSelectedImgs.forEach(img => {
        img.classList.remove('selected')
    })
}
