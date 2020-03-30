// Creating the player objects

const playerFactory = (name) => {
    const congratulate = `Congratulations ${name} you win!`;
    return { name, congratulate };
  };

let player1 = playerFactory('Player 1');
let player2 = playerFactory('Player 2');

// The simple way to set up the gameboard 

let gameboard = ['','','','','','','','',''];
let boxes = [];
for (i=0; i < 9; i++) {
    boxes.push(document.querySelector(`[data-value = "${i}"]`))
};
let outcomes = ['X', 'O'];
let xo = 'X';
let count = 0;

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        gameLogic(box,index)
        updateBoard();
        checkBoard();
    })
})

function gameLogic(box,index) {
    console.log(box.textContent)
    if(box.textContent === '') {
        if (xo == 'X') {
            xo = 'O'
        } else {
            xo = 'X'
        }
        count++
        gameboard[index] = xo
    }
}

function updateBoard() {
    for (i=0; i < 9; i++) {        
        boxes[i].textContent = gameboard[i]
    }
}
function checkBoard() {
    outcomes.forEach(xo => {
        if (gameboard[0] == xo && gameboard[1] == xo && gameboard[2] == xo) {checkWinner(xo)}
        else if (gameboard[3] == xo && gameboard[4] == xo && gameboard[5] == xo) {checkWinner(xo)}
        else if (gameboard[6] == xo && gameboard[7] == xo && gameboard[8] == xo) {checkWinner(xo)}
        else if (gameboard[0] == xo && gameboard[3] == xo && gameboard[6] == xo) {checkWinner(xo)}
        else if (gameboard[1] == xo && gameboard[4] == xo && gameboard[7] == xo) {checkWinner(xo)}
        else if (gameboard[2] == xo && gameboard[5] == xo && gameboard[8] == xo) {checkWinner(xo)}
        else if (gameboard[0] == xo && gameboard[4] == xo && gameboard[8] == xo) {checkWinner(xo)}
        else if (gameboard[2] == xo && gameboard[4] == xo && gameboard[6] == xo) {checkWinner(xo)}
        else if (count > 8) {alert('It\'s a draw!')}
    });
}

function checkWinner(xo) {
    if(xo == 'x') {
        alert(player1.congratulate)
    } else {
        alert(player2.congratulate)
    }
}