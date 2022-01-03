const inputs = document.querySelectorAll('input')
inputs.forEach((input, k) => {
    input.addEventListener('keyup', (e) => {
        if (!isNaN(parseInt(e.key))) {
            if (k < inputs.length - 1) inputs[k + 1].focus()
        } else if (e.key === 'Backspace') {
            if (k > 0) inputs[k - 1].focus()
        }
        input.value = isNaN(parseInt(e.key)) ? null : input.value.slice(0, 1)
    })
})