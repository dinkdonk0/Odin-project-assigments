// Player factory
function createPlayer(name, symbol) {
    return { name, symbol };
}

// DisplayController module
const DisplayController = (() => {
    const gameBoard = document.querySelector(".gameBoard");
   
    let tileBlocks = [];

    function generateTile() {
        for (let i = 0; i < 9; i++) {
            let tileBlock = document.createElement("div");
            gameBoard.appendChild(tileBlock);
            tileBlocks.push(tileBlock);
            attachEventListeners(tileBlock); 
            tileBlock.classList.add("tile");
        }
    }

    function attachEventListeners(tileBlock) {
        
        tileBlock.addEventListener("click", function(event){
            
            if (event.target.textContent === '') {
                // Place 'X' or 'O' depending on the current player's turn
                event.target.textContent = Game.playerTurn().symbol;
                Game.checkWin();

        } });
       
    }

    function clearTiles() {
        for (let i = 0; i < 9; i++) {
          tileBlocks[i].textContent = "";
        }
        tileBlocks = [];
      }

   

    return {
        generateTile,
        clearTiles
    };
})();



// Game module
const Game = (() => {
    const player1 = createPlayer("Player 1", "X");
    const player2 = createPlayer("Player 2", "O");
    const restartButton = document.querySelector(".restart");
    let turn = 0;

    function playerTurn() {
        if (turn % 2 === 0) {
            turn++;
            return player1;
        } else {
            turn++;
            return player2;
        }
    }

    function start() {
        DisplayController.generateTile();
    }
    restartButton.addEventListener("click", () => {
        turn = 0;
        DisplayController.clearTiles();

      });

    function checkWin(){
        const winningCombos = [
            // Rows
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // Columns
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // Diagonals
            [0, 4, 8],
            [2, 4, 6]
          ];
          
        
    }

    return {
        start,
        playerTurn,
        checkWin
    };
})();

// Initialize game
Game.start();