const passLenEl = document.getElementById('pass-len')
let passLen = passLenEl.value
passLenEl.addEventListener('change', () => (passLen = passLenEl.value))

const incUpp = document.getElementById('inc-uppercase')
const incLow = document.getElementById('inc-lowercase')
const incNum = document.getElementById('inc-numbers')
const incSym = document.getElementById('inc-symbols')
const checkboxes = [incUpp, incLow, incNum, incSym]
const includs = [
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'abcdefghijklmnopqrstuvwxyz',
    '0123456789',
    '$@[]{|}~¡¢£¥§©«¬®°±²³¶·¹',
]
let generatedPass = ''

function onGenerate() {
    generatedPass = ''
    const checked = checkboxes.filter((c) => c.checked)
    if (checked.length > 0) {
        while (generatedPass.length < passLen) {
            if (checkboxes[0].checked) {
                generatedPass +=
                    includs[0][Math.floor(Math.random() * includs[0].length)]
            }
            permute()
        }
    }
    return generatedPass
}

function permute() {
    const aux1 = checkboxes[0]
    const aux2 = includs[0]
    for (let j = 1; j < checkboxes.length; j++) {
        checkboxes[j - 1] = checkboxes[j]
        includs[j - 1] = includs[j]
    }
    checkboxes[checkboxes.length - 1] = aux1
    includs[includs.length - 1] = aux2
}

const passResult = document.querySelector('span')
const genButton = document.querySelector('button')
genButton.addEventListener('click', () => {
    passResult.innerText = onGenerate()
})

const copyBox = document.querySelector('.copy-box')
copyBox.addEventListener('click', () => {
    if (generatedPass.length === 0) return
    navigator.clipboard.writeText(generatedPass).then(
        () => {
            alert('Password copied to clipboard!')
        },
        (err) => {
            alert('Error: could not copy to clipboard.')
        },
    )
})