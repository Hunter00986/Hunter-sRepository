button = document.querySelector('.btn')
body = document.querySelector('body')
hero = document.querySelector('.hero')
content = document.querySelector('.content')
nav = document.querySelector('.nav')


button.addEventListener('click', () => {
    body.classList.toggle('light')
    hero.classList.toggle('light')
    button.classList.toggle('light')
    content.classList.toggle('light')
    nav.classList.toggle('light')
})
