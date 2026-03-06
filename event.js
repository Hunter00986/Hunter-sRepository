clickBox = document.querySelector('.click')
spinBox = document.querySelector('.spin')

colors = ['blue', 'green', 'purple', 'red']
index = 0

clickBox.addEventListener('click',() => {
    clickBox.style.background = colors[index]
    index = index + 1
    if (index == colors.length)
    {
        index = 0
    }
    clickBox.style.color = 'white'
})

spinBox.addEventListener('click', () => {
    spinBox.classList.toggle('start')
})

dbBox = document.querySelector('.dbclick');
dbBox.addEventListener('dblclick', () => {
    dbBox.classList.toggle('active')
})
