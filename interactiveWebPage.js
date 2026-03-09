clickBox = document.querySelector('.center-text')

colors = ['blue', 'green', 'purple', 'red', 'magenta', 'turqoise']
index = 0

clickBox.addEventListener('click',() => {
    document.body.style.background = colors[index]
    index = index + 1
    if (index == colors.length)
    {
        index = 0
    }
})
