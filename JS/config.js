function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;
    playerInputModal.style.display = 'block';
    overlay.style.display = 'block';
}

function closePlayerConfig() {
    playerInputModal.style.display = 'none';
    overlay.style.display = 'none'; 
    formInputElement.value = '';
}

function savePlayerInput(event) {
    event.preventDefault(event.target);
    const formData = new FormData(event.target);
    const enteredName = formData.get('playername').trim();
    console.log(enteredName)
    
    if(enteredName === '') {
        errorMessage.textContent = '* Please input a valid name *'
        return;
    } else{
        errorMessage.textContent = '';
    }

    const specificPlayer = document.getElementById('player-' + editedPlayer + '-data')
    specificPlayer.children[1].textContent = enteredName;
    
    players[editedPlayer - 1].name = enteredName;
    closePlayerConfig();
}