const checkboxes = document.querySelectorAll('label')
const checkboxInput = document.querySelector('input')
let checkedNum = 0

checkboxes.forEach((checkbox, k) => {
    checkbox.addEventListener('click', () => {
        checkbox.nextElementSibling.classList.toggle('active')
        checkbox.parentElement.classList.toggle('violet')
        const input = checkbox.previousElementSibling;
        if (!input.checked && checkedNum >= 2) {
            console.log('checked')
            if (k == 0) {
                changeState(checkboxes[checkboxes.length - 1], false)
            } else {
                changeState(checkboxes[k - 1], false)
            }
        }
        checkedNum += input.checked ? -1 : 1
    })
})

function changeState(checkbox, state) {
    const input = checkbox.previousElementSibling;
    input.checked = state
    if (state) {
        checkedNum++
        checkbox.nextElementSibling.classList.add('active')
        checkbox.parentElement.classList.add('violet')
    } else {
        checkedNum--
        checkbox.nextElementSibling.classList.remove('active')
        checkbox.parentElement.classList.remove('violet')
    }

}