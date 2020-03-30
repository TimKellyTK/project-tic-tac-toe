// Creating the player objects

const playerFactory = (name) => {
    const congratulate = `Congratulations ${name} you win!`;
    return { name, congratulate };
  };

let player1 = playerFactory('Player 1');
let player2 = playerFactory('Player 2');


// Creating the gameboard
let gameboard = ['','','','','','','','',''];
let boxes = [];
for (i=0; i < 9; i++) {
    boxes.push(document.querySelector(`[data-value = "${i}"]`))
};
let outcomes = ['X', 'O'];
let count = 0;
let xo = 'X';
let instruction = document.querySelector('.players-turn')
let refreshGame = document.querySelector('.refresh-game')
let gameComplete;

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        gameLogic(box,index)
    })
})

refreshGame.addEventListener('click', () => {
    restart();
})

function gameLogic(box,index) {
    if (!gameComplete) {
        if(box.textContent === '') {
            updateGame(index);
            updateBoard();
            checkBoard();
        }
    }
}

function restart() {
    gameComplete = false;
    gameboard = ['','','','','','','','',''];
    count = 0
    xo = 'X'
    instruction.textContent = `${player1.name} Starts`
    document.querySelector('.player-names').style.display = "flex"
    document.querySelector('.gameboard-icons').style.display = "none"
    boxes.forEach(box => box.classList.remove("win"));
    updateBoard()
}

function updateGame(index) {
    gameboard[index] = xo;
    document.querySelector('.player-names').style.display = "none"
    document.querySelector('.gameboard-icons').style.display = "flex"

    if (xo == 'X') {
        xo = 'O'
        instruction.textContent = `${player2.name}'s turn`
    } else {
        xo = 'X'
        instruction.textContent = `${player1.name}'s turn`
    }
    count++
}

function updateBoard() {
    for (i=0; i < 9; i++) {        
        boxes[i].textContent = gameboard[i]
    }
}
function checkBoard() {
    outcomes.forEach(xo => {
        if (gameboard[0] == xo && gameboard[1] == xo && gameboard[2] == xo) {return checkWinner(xo, 0, 1, 2);}
        else if (gameboard[3] == xo && gameboard[4] == xo && gameboard[5] == xo) {return checkWinner(xo, 3, 4, 5);}
        else if (gameboard[6] == xo && gameboard[7] == xo && gameboard[8] == xo) {return checkWinner(xo, 6, 7, 8)}
        else if (gameboard[0] == xo && gameboard[3] == xo && gameboard[6] == xo) {return checkWinner(xo, 0, 3, 6)}
        else if (gameboard[1] == xo && gameboard[4] == xo && gameboard[7] == xo) {return checkWinner(xo, 1, 4, 7)}
        else if (gameboard[2] == xo && gameboard[5] == xo && gameboard[8] == xo) {return checkWinner(xo, 2, 5, 8)}
        else if (gameboard[0] == xo && gameboard[4] == xo && gameboard[8] == xo) {return checkWinner(xo, 0, 4, 8)}
        else if (gameboard[2] == xo && gameboard[4] == xo && gameboard[6] == xo) {return checkWinner(xo, 2, 4, 6)}
        if (!gameComplete && count > 8) {instruction.textContent = `It's a draw!`}
    });
}

function checkWinner(xo, a, b, c) {
    boxes[a].classList.add("win");
    boxes[b].classList.add("win");
    boxes[c].classList.add("win");
    if(xo == 'X') {
        instruction.textContent = `${player1.name} wins!`
    } else {
        instruction.textContent = `${player2.name} wins!`
    }
    refreshGame.style.display = 'flex';
    gameComplete = true;
}

// Update the player names

let text = {
    player1: document.querySelector('[data-value = "player1"]'),
    player2: document.querySelector('[data-value = "player2"]'),
}

let form = {
    player1: document.querySelector('.player-1-block'),
    player2: document.querySelector('.player-2-block')
}

let input = {
    player1: document.querySelector('#player-1'),
    player2: document.querySelector('#player-2')
}

let submitBtn = {
    player1: document.querySelector('#player-1-submit'),
    player2: document.querySelector('#player-2-submit')
}

function loadPlayerNames() {
    text.player1.firstElementChild.textContent = player1.name;
    text.player2.firstElementChild.textContent = player2.name;
    input.player1.value = player1.name;
    input.player2.value = player2.name;
    instruction.textContent = `${player1.name} Starts`
}

function showForm(player) {
    form[player].style.display = "flex";
    text.player1.style.display = "none";
    text.player2.style.display = "none";
}

function submitForm(player) {
    if (player == 'player1') {
        player1.name = input[player].value;
    } else {
        player2.name = input[player].value;
    }
    loadPlayerNames();
    form[player].style.display = "none";
    text.player1.style.display = "flex";
    text.player2.style.display = "flex";
}

loadPlayerNames()
text.player1.addEventListener('click', () => showForm('player1'))
text.player2.addEventListener('click', () => showForm('player2'))
submitBtn.player1.addEventListener('click', () => submitForm('player1'))
submitBtn.player2.addEventListener('click', () => submitForm('player2'))

// Update game instructions


/* 
The things you need to create to make it all work together
- Update player 1's name (DONE)
- Update player 2's name (DONE)
- Update title for instructions on what player's turn (DONE)
- Update title when the game is finished (DONE)
- Update the discard game icon for when game is started (DONE)
- Update the restart game icon for when game is finished (DONE)
- Create function to discard/restart the game (DONE)
- Store the player's names in localStorage
- Clean up all the functions into factory functions and modules
- Clean up the code
- Get live on Github pages
- Contribute to The Odin Project curriculum
*/