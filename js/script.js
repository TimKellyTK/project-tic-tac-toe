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
let count = 0;
let xo;
let gameComplete;

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        gameLogic(box,index)
    })
})

function gameLogic(box,index) {
    if (!gameComplete) {
        if(box.textContent === '') {
            if (xo == 'X') {
                xo = 'O'
            } else {
                xo = 'X'
            }
            count++
            gameboard[index] = xo
            updateBoard();
            checkBoard();
        }
    }
}

function updateBoard() {
    for (i=0; i < 9; i++) {        
        boxes[i].textContent = gameboard[i]
    }
}
function checkBoard() {
    outcomes.forEach(xo => {
        if (gameboard[0] == xo && gameboard[1] == xo && gameboard[2] == xo) {checkWinner(xo, 0, 1, 2)}
        else if (gameboard[3] == xo && gameboard[4] == xo && gameboard[5] == xo) {checkWinner(xo, 3, 4, 5)}
        else if (gameboard[6] == xo && gameboard[7] == xo && gameboard[8] == xo) {checkWinner(xo, 6, 7, 8)}
        else if (gameboard[0] == xo && gameboard[3] == xo && gameboard[6] == xo) {checkWinner(xo, 0, 3, 6)}
        else if (gameboard[1] == xo && gameboard[4] == xo && gameboard[7] == xo) {checkWinner(xo, 1, 4, 7)}
        else if (gameboard[2] == xo && gameboard[5] == xo && gameboard[8] == xo) {checkWinner(xo, 2, 5, 8)}
        else if (gameboard[0] == xo && gameboard[4] == xo && gameboard[8] == xo) {checkWinner(xo, 0, 4, 8)}
        else if (gameboard[2] == xo && gameboard[4] == xo && gameboard[6] == xo) {checkWinner(xo, 2, 4, 6)}
        else if (count > 8) {alert('It\'s a draw!')}
    });
}

function checkWinner(xo, a, b, c) {
    boxes[a].classList.add("win");
    boxes[b].classList.add("win");
    boxes[c].classList.add("win");
    if(xo == 'x') {
        alert(player1.congratulate)
    } else {
        alert(player2.congratulate)
    }
    gameComplete = true;
}

/* 
The things you need to create to make it all work together
- Update player 1's name
- Update player 2's name
- Update title for instructions on what player's turn
- Update title when the game is finished
- Update the discard game icon for when game is started
- Update the restart game icon for when game is finished
- Create function to discard/restart the game
- Store the player's names in localStorage
- Clean up all the functions into factory functions and modules
- Clean up the code
- Get live on Github pages
- Contribute to The Odin Project curriculum
*/