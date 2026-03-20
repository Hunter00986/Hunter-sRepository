screens = document.querySelectorAll('.screen')
choose_insect_btn = document.querySelectorAll('.choose-insect-btn')
start_btn = document.getElementById('start-btn')
game_container = document.querySelector('.game-container')

start_btn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

for (let i = 0; i < choose_insect_btn.length; i = i + 1) {
    choose_insect_btn[i].addEventListener('click', () => {
        screens[1].classList.add('up')
        img = choose_insect_btn[i].querySelector('img')
        src = img.getAttribute('src')
        alt = img.getAtrribute('alt')
        startGame()
    })
}

function startGame() {
    setTimeout(creatInsect, 1000)
}

function creatInsect() {
    insect = document.createElement('div')
    insect.classList.add('insect')
    insect.innerHtml = `<img src="images/dragonfly.jfif" alt="Dragonfly">`
    game_container.appendChild(insect)
}
