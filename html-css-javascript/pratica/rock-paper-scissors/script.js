const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnSci = document.querySelector('#sci');
let userOption = document.getElementById('user-play')
let cP = 0 // its points from the computer
let uP = 0 // its points from the user


function chooseRock() {
    userOption.innerHTML = '✊'
    let i = 0

    generateCpuMove(i)
}

function choosePaper() {
    userOption.innerHTML = '✋'
    let i = 1

    generateCpuMove(i)
}

function chooseScissors() {
    userOption.innerHTML = '✌️'
    let i = 2

    generateCpuMove(i)
}

function generateCpuMove(userChoice) {
    const charset = ['✊', '✋', '✌️']
    var cpuMove = Math.floor(Math.random() * charset.length)
    let cpuOption = document.getElementById('cpu-play')
    cpuOption.innerHTML = `${charset[cpuMove]}`

    showResult(userChoice, cpuMove)
}

function showResult(userPlay, cpuPlay) {
    let result = document.getElementById('result')
    let cpuPoints = document.getElementById('cpu-points')
    let userPoints = document.getElementById('user-points')

    switch (userPlay) {
        case 0:
            if (cpuPlay === 1) {
                result.innerHTML = 'CPU WINS!'
                cP++
            } else if (cpuPlay === 2) {
                result.innerHTML = 'USER WINS!'
                uP++
            } else {
                result.innerHTML = "IT'S A DRAW!"
            }
        break;

        case 1:
            if (cpuPlay < userPlay) {
                result.innerHTML = 'USER WINS!'
                uP++
            } else if (cpuPlay > userPlay) {
                result.innerHTML = 'CPU WINS!'
                cP++
            } else {
                result.innerHTML = "IT'S A DRAW!"
            }
        break;

        case 2:
            if (cpuPlay === 0) {
                result.innerHTML = 'CPU WINS!'
                cP++
            } else if (cpuPlay === 1) {
                result.innerHTML = 'USER WINS!'
                uP++
            } else {
                result.innerHTML = "IT'S A DRAW!"
            }
        break;
    }

    cpuPoints.innerHTML = `${cP}`
    userPoints.innerHTML = `${uP}`
}


btnRock.addEventListener('click', chooseRock)
btnPaper.addEventListener('click', choosePaper)
btnSci.addEventListener('click', chooseScissors)