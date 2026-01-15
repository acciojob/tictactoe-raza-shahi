//your JS code here. If required.
const players = {};
const usersElement = document.getElementById("users");
const gameBoardElement = document.getElementById("game-board");
const user1Input = document.getElementById('player1');
const user2Input = document.getElementById('player2');
let currentPlayer = document.getElementById('current-player');
const cells = document.querySelectorAll('.cell');

cells.forEach(cell=>{
	cell.addEventListener('click',()=>{
		if(this.textContent ===''){
			this.textContent = currentPlayer.textContent.includes(players.player1)?'x':'o';
			if(currentPlayer.textContent.includes(players.player1)) {
                currentPlayer.textContent = `${players.player2}, you're up!`;
            } else {
                currentPlayer.textContent = `${players.player1}, you're up!`;
            }
		}
	})
})

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