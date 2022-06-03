// Game Config Area
const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
const players = [
    {
        name: '',
        symbol: 'X'
    },
    
    {
        name: '',
        symbol: 'O'
    }
]

const editPlayerBtn1 = document.getElementById('edit-player-btn1');
const editPlayerBtn2 = document.getElementById('edit-player-btn2');
const playerInputModal = document.getElementById('first-modal');
const overlay = document.getElementById('backdrop');
const cancelButton = document.getElementById('cancel-btn');
const gameConfigInputSection = document.querySelector('form');
const formInputElement = document.getElementById('player-name');
const errorMessage = document.getElementById('error-message');

// Game Config event listeners
editPlayerBtn1.addEventListener('click', openPlayerConfig);
editPlayerBtn2.addEventListener('click', openPlayerConfig);
cancelButton.addEventListener('click', closePlayerConfig);
overlay.addEventListener('click', closePlayerConfig);
gameConfigInputSection.addEventListener('submit', savePlayerInput)

//Game board Area
const startGameBtn = document.getElementById('start-game-btn');
const startGameBtn2 = document.getElementById('start-game-btn2')
const gameBoard = document.getElementById('active-game');
const gameAreaElement = document.getElementById('gameboard');
const activeGamePlayerName = document.getElementById('active-player-name');
const gameOverMessage = document.querySelector('.game-over-message-modal');
const overlay2 = document.querySelector('.backdrop2')

// Game board event listener
startGameBtn.addEventListener('click', startGame);
startGameBtn2.addEventListener('click', startGame);                                         
gameAreaElement.addEventListener('click', gameFieldArea)
overlay2.addEventListener('click', overlayReset) 