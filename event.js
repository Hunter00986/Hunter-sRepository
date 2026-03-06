clickBox = document.querySelector('.click')
spinbox = document.querySelector('spin')

colors = ['blue', 'green', 'purple', 'red']
index = 0

clickBox.addEventListener('click',() => {
    clickBox.style.background = 'colors[index]'
    index = index + 1
    if (index == colors.length)
    {
        index = 0
    }
    clickbox.style.color = 'white'
})

spinbox.addEventListener('click', () => {
    spinbox.classList.toggle('start')
})
