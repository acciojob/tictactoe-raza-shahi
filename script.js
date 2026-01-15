const players = {};
const usersElement = document.getElementById("users");
const gameBoardElement = document.getElementById("game-board");
const user1Input = document.getElementById('player1');
const user2Input = document.getElementById('player2');
let currentPlayer = document.getElementById('current-player');
const cells = document.querySelectorAll('.cell');

let bord = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

const winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function checkWin() {
    for (let i = 0; i < winPatterns.length; i++) {
        const [a, b, c] = winPatterns[i];
        if (bord[a] && bord[a] === bord[b] && bord[a] === bord[c]) {
            return true;
        }
    }
    return false;
}

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

cells.forEach((cell,index) => {
    cell.addEventListener('click', function() {
         if (cell.textContent !== '' || gameOver) return;

        if(this.textContent === '') {   
            if(currentPlayer.textContent.includes(players.player1)){
                this.textContent = 'x';
                bord[index] = 'x';
                if(checkWin()) {
                    currentPlayer.textContent = `${players.player1} congratulations you won!`;
                    gameOver = true;
                    return;
                }
            } else {
                this.textContent = 'o';
                bord[index] = 'o';
                if(checkWin()) {
                    currentPlayer.textContent = `${players.player2} congratulations you won!`;
                    gameOver = true;
                    return;
                }
            }
            // Switch player
            if(currentPlayer.textContent.includes(players.player1)) {
                currentPlayer.textContent = `${players.player2}, you're up!`;
            } else {
                currentPlayer.textContent = `${players.player1}, you're up!`;
            }
        }
    });
});