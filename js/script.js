// The simple way to set up the gameboard 

let gameboard = ['x','x','x',3,4,5,6,7,8]
let outcomes = ['x', 'o']

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
    });
}

function checkWinner(xo) {
    if(xo == 'x') {
        alert('player 1 wins')
    } else {
        alert('player 2 wins')
    }
}

checkBoard();

// Creating the player objects




// Creating the DOM layer manipulation