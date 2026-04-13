const ball = document.createElement('div')
document.body.appendChild(ball)
const lPadel = document.createElement('div')
document.body.appendChild(lPadel)
const ballRadius = 50
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballYPosition = (windowHeight / 2) - ballRadius
let ballXPosition = (windowWidth / 2) - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1
let lPadelHeight = 100
let lPadelWidth = 20
let lPadelSpeed = 5
let lPadelYPosition = (windowHeight / 2) - (lPadelHeight / 2)
let lPadelXPosition = 70

createBall()
function createBall () {
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "pink"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}

setInterval(moveBall, 10)
function moveBall() {

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let ballRight = ballXPosition 

    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
    if(ballYPosition < 0 || ballYPosition > (windowHeight - (2 * ballRadius))) {
        ballYDirection = ballYDirection * -1
    }
    if(ballXPosition < 0 || ballXPosition > (windowWidth - (2 * ballRadius))) {
        ballXDirection = ballXDirection * -1
    }
}

createlPadel ()
function createlPadel () {
    lPadel.style.height = `${lPadelHeight}px`
    lPadel.style.width = `${lPadelWidth}px`
    lPadel.style.backgroundColor = "teal"
    lPadel.style.position = 'absolute'
    lPadel.style.left = '50px'
    lPadel.style.top= `${lPadelYPosition}px`
}

document.addEventListener('keydown', (event) => {
    if(event.key === 'w') {
        if(lPadelYPosition < 0){
            lPadelYPosition = 0
        }
        else {
            lPadelYPosition = lPadelYPosition - lPadelSpeed
        }
    }
    if(event.key === 's') {
        if(lPadelYPosition > windowHeight - lPadelHeight){
            lPadelYPosition = windowHeight - lPadelHeight
        }
        else{
            lPadelYPosition = lPadelYPosition + lPadelSpeed
        }
    }
    lPadel.style.top = `${lPadelYPosition}px`
})
