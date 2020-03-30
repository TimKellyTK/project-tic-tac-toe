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
let outcomes = ['x', 'o'];

function updateBoard() {
    for (i=0; i < 9; i++) {        
        boxes[i].textContent = gameboard[i]
    }
}
updateBoard();

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        gameboard[index] = 'oi'
        updateBoard();
    })
}) 

/* let boxes = {};
for (i=0; i < 9; i++) {boxes[`b${i}`] = document.querySelector(`[data-value = "${i}"]`)};

function updateBoard() {
    for (i=0; i < 9; i++) {        
        boxes[`b${i}`].textContent = gameboard[i]
    }
}
updateBoard();

boxes.forEach(box => {
    box.addEventListener('click', alert('hello world'))
}) */



// it's bad code becaues it relies on this weird gameboard, it should just be a simple for loop



// Add event listeners to the board to say when they click box.b0 -> gameboard.0 = 'x', change textContent and checkBoard() and changeTurn

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
        alert(player1.congratulate)
    } else {
        alert(player2.congratulate)
    }
}

checkBoard();

// Creating the DOM layer manipulation