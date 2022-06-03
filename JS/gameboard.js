function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverMessage.firstElementChild.innerHTML = 'You won, <span id="winner-name">PLAYER NAME</span>';
    gameOverMessage.style.display = 'none';

    let gameBoardIndex = 0;

    for(let i = 0; i < 3; i++ ) {
        for(let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            const gameBoardItemElement = gameAreaElement.children[gameBoardIndex];
            gameBoardItemElement.textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startGame(event) {
    if (players[0].name === '' || players[1].name === '') {
        alert('The player name field is empty')
        return;
    }
    resetGameStatus();
    gameBoard.style.display='block';
    activeGamePlayerName.textContent = players[activePlayer].name;
    overlay2.style.display ='none';
}

function switchPlayers() {
    if (activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0
    }
    activeGamePlayerName.textContent = players[activePlayer].name;
}

function gameFieldArea(event) {
    if (event.target.tagName !== 'LI' || gameIsOver === true) {
        return;
    }
    const gameField = event.target;
    const selectedCols = gameField.dataset.col - 1;
    const selectedRows = gameField.dataset.row - 1;

    if(gameData[selectedCols] [selectedRows] > 0) {
        return;
    }
    gameField.textContent = players[activePlayer].symbol;
    gameField.classList.add('disabled');

    gameData[selectedCols] [selectedRows] = activePlayer + 1;

    const winnerId = checkForGameOver();

    if (winnerId !== 0) {          
        endGame(winnerId);
    }
    currentRound++;
    switchPlayers();
}

function checkForGameOver() {
    // Checking rows for equality
    for(let i = 0; i < 3; i++) {        
        if (gameData[i][0] > 0 && 
            gameData[i][0] === gameData[i][1] && 
            gameData[i][1] === gameData[i][2]) {
            return gameData[i][0];
        }
    } 

    // Checking cols for equality
    for(let i = 0; i < 3; i++) {
        if (gameData[0][i] > 0 && 
            gameData[0][i] === gameData[1][i] && 
            gameData[1][i] === gameData[2][i]) {
            return gameData[0][i];
    }
}

// Checking top left to bottom diagonal for equality
    if (gameData[0][0] > 0 && 
        gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]) {
            return gameData[0][0];
    }
// Checking top right to bottom diagonal for equality
    if (gameData[0][2] > 0 && 
        gameData[0][2] === gameData[1][1] && gameData[1][1] === gameData[2][0]) {
            return gameData[0][2];
    }

    if (currentRound === 9) {
        return -1;
    }

    return 0;
}

function endGame(winnerId) {
    gameIsOver = true;
    gameOverMessage.style.display ='block';
    if(winnerId > 0) {
        const winnerName = players[winnerId -1].name;     
        gameOverMessage.firstElementChild.firstElementChild.textContent = winnerName;
    } else {
        gameOverMessage.firstElementChild.textContent = 'It\'s a draw';
    }
    overlay2.style.display ='block';
}

function overlayReset() {
    return startGame();
}