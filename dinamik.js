const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const reset = document.getElementById('reset');
const select = document.querySelector('select');

// ariables
let score1 = 0
let score2 = 0
let level = select.value
let gameOver = true

// Events

btn1.addEventListener('click', () => {
    // score1++
    if (gameOver) {
        score1++
        player1.textContent = score1
        if (score1 == level) {
            gameOver = false
            player1.style.color = 'red'
            player2.style.color = 'green'
        }

    }
})
btn2.addEventListener('click', () => {
    if (gameOver) {
        score2++
        player2.textContent = score2
        if (score2 == level) {
            gameOver = false
            player1.style.color = 'red'
            player2.style.color = 'green'
        }
    }
})
select.addEventListener('change', () => {
    let selectVal = select.value
    level = selectVal
    restart()
})


reset.addEventListener('click', restart)

function restart() {
    score1 = 0
    score2 = 0
    gameOver = true
    player1.textContent = 0
    player2.textContent = 0
    player1.style.color = 'black'
    player2.style.color = 'black'
}