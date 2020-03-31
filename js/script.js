let ticTacToe = (function () {
    let player = (function () {
        // Player variables
        const _playerFactory = (name) => {
            const congratulate = `Congratulations ${name} you win!`;
            return { name, congratulate };
          };

        let instruction = document.querySelector('.players-turn') 
        let player1 = _playerFactory('Player 1');
        let player2 = _playerFactory('Player 2');

        let _text = {
            player1: document.querySelector('[data-value = "player1"]'),
            player2: document.querySelector('[data-value = "player2"]'),
        }
        let _form = {
            player1: document.querySelector('.player-1-block'),
            player2: document.querySelector('.player-2-block')
        }
        let _input = {
            player1: document.querySelector('#player-1'),
            player2: document.querySelector('#player-2')
        }
        let _submitBtn = {
            player1: document.querySelector('#player-1-submit'),
            player2: document.querySelector('#player-2-submit')
        }

        // Player functions
        function _loadPlayerNames() {
            _text.player1.firstElementChild.textContent = player1.name;
            _text.player2.firstElementChild.textContent = player2.name;
            _input.player1.value = player1.name;
            _input.player2.value = player2.name;
            instruction.textContent = `${player1.name} Starts`
        }
        function _showForm(player) {
            _form[player].style.display = "flex";
            _text.player1.style.display = "none";
            _text.player2.style.display = "none";
        }
        function _submitForm(player) {
            if (player == 'player1') {
                player1.name = _input[player].value;
            } else {
                player2.name = _input[player].value;
            }
            _form[player].style.display = "none";
            _text.player1.style.display = "flex";
            _text.player2.style.display = "flex";
            _loadPlayerNames();
        }

        // Button to update player name 
        _text.player1.addEventListener('click', () => _showForm('player1'))
        _text.player2.addEventListener('click', () => _showForm('player2'))

        // Submit button to update player name
        _submitBtn.player1.addEventListener('click', () => _submitForm('player1'))
        _submitBtn.player2.addEventListener('click', () => _submitForm('player2'))   

        // Load player names on page load
        _loadPlayerNames()
        return {instruction, player1, player2}
    })();
    
    let game = (function () {
        // Game variables
        let _gameboard = ['','','','','','','','',''];
        let _boxes = [];
        for (i=0; i < 9; i++) {
            _boxes.push(document.querySelector(`[data-value = "${i}"]`))
        };
        let _outcomes = ['X', 'O'];
        let _count = 0;
        let _xo = 'X';
        let _refreshGame = document.querySelector('.refresh-game')
        let _gameComplete;

        // Game functions
        function _gameLogic(box,index) {
            if (!_gameComplete) {
                if(box.textContent === '') {
                    _updateGame(index);
                    _updateBoard();
                    _checkBoard();
                    _addCount();
                    _gameDisplay();
                }
            }
        }
        function _updateGame(index) {
            _gameboard[index] = _xo;
            if (_xo == 'X') {
                _xo = 'O'
                player.instruction.textContent = `${player.player2.name}'s turn`
            } else {
                _xo = 'X'
                player.instruction.textContent = `${player.player1.name}'s turn`
            }
        }
        function _updateBoard() {
            for (i=0; i < 9; i++) {        
                _boxes[i].textContent = _gameboard[i]
            }
        }
        function _checkBoard() {
            _outcomes.forEach(xo => {
                if (_gameboard[0] == xo && _gameboard[1] == xo && _gameboard[2] == xo) {return _checkWinner(xo, 0, 1, 2);}
                else if (_gameboard[3] == xo && _gameboard[4] == xo && _gameboard[5] == xo) {return _checkWinner(xo, 3, 4, 5);}
                else if (_gameboard[6] == xo && _gameboard[7] == xo && _gameboard[8] == xo) {return _checkWinner(xo, 6, 7, 8)}
                else if (_gameboard[0] == xo && _gameboard[3] == xo && _gameboard[6] == xo) {return _checkWinner(xo, 0, 3, 6)}
                else if (_gameboard[1] == xo && _gameboard[4] == xo && _gameboard[7] == xo) {return _checkWinner(xo, 1, 4, 7)}
                else if (_gameboard[2] == xo && _gameboard[5] == xo && _gameboard[8] == xo) {return _checkWinner(xo, 2, 5, 8)}
                else if (_gameboard[0] == xo && _gameboard[4] == xo && _gameboard[8] == xo) {return _checkWinner(xo, 0, 4, 8)}
                else if (_gameboard[2] == xo && _gameboard[4] == xo && _gameboard[6] == xo) {return _checkWinner(xo, 2, 4, 6)}
                if (!_gameComplete && _count > 8) {player.instruction.textContent = `It's a draw!`}
            });
        }
        function _checkWinner(xo, a, b, c) {
            _boxes[a].classList.add("win");
            _boxes[b].classList.add("win");
            _boxes[c].classList.add("win");
            if(_xo == 'X') {
                player.instruction.textContent = `${player.player1.name} wins!`
            } else {
                player.instruction.textContent = `${player.player2.name} wins!`
            }
            _refreshGame.style.display = 'flex';
            _gameComplete = true;
        }
        function _addCount() {
            _count++
        }
        function _gameDisplay() {
            document.querySelector('.player-names').style.display = "none"
            document.querySelector('.gameboard-icons').style.display = "flex"
        }
        function _restart() {
            _gameComplete = false;
            _gameboard = ['','','','','','','','',''];
            _count = 0
            _xo = 'X'
            player.instruction.textContent = `${player.player1.name} Starts`
            document.querySelector('.player-names').style.display = "flex"
            document.querySelector('.gameboard-icons').style.display = "none"
            _boxes.forEach(box => box.classList.remove("win"));
            _updateBoard()
        }

        // Button to choose X / O on a box
        _boxes.forEach((box, index) => {
            box.addEventListener('click', () => {
                _gameLogic(box,index)
            })
        })

        // Button to restart game
        _refreshGame.addEventListener('click', () => {
            _restart();
        })
    })();
})()