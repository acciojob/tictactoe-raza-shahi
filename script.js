//your JS code here. If required.
const players = {};
const usersElement = document.getElementById("users");
const gameBoardElement = document.getElementById("game-board");
const user1Input = document.getElementById('player-1');
const user2Input = document.getElementById('player-2');
let currentPlayer = document.getElementById('current-player');

document.getElementById('submit').addEventListener('click', function() {
    const user1 = user1Input.value;
    const user2 = user2Input.value;
    if(user1 && user2) {
        players.player1 = user1;
        players.player2 = user2;
        alert(`Players set:\nPlayer 1: ${players.player1}\nPlayer 2: ${players.player2}`);
        usersElement.style.display = "none";
        currentPlayer.textContent = `${players.player1}, you're up!`;
        gameBoardElement.style.display = "block";
    } else {
        alert('Please enter names for both players.');
    }

});