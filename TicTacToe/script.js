// Player factory
function createPlayer(name, symbol) {
    return { name, symbol };
}

// DisplayController module
const DisplayController = (() => {
    const gameBoard = document.querySelector(".gameBoard");
   
    let tileBlocks = []; //array that hold game block info

    //generates the 9 game blocks
    function generateTile() {
        for (let i = 0; i < 9; i++) {
            let tileBlock = document.createElement("div");
            gameBoard.appendChild(tileBlock);
            tileBlocks.push(tileBlock);
            attachEventListeners(tileBlock); 
            tileBlock.classList.add("tile");
        }
    }
    //adds eventlisteners
    function attachEventListeners(tileBlock) {
        
        tileBlock.addEventListener("click", function(event){
            if (event.target.textContent === '') {
                // Place 'X' or 'O' depending on the current player's turn
                event.target.textContent = Game.playerTurn().symbol;
                //checks win condition on every click (every player move)
                Game.checkWin();
        } });
       
    }
    //clears the game from all X and O
    function clearTiles() {
        
        for (let i = 0; i < 9; i++) {
          tileBlocks[i].textContent = "";
        }
      }
    return {
        attachEventListeners,
        generateTile,
        clearTiles,
        tileBlocks
    };
})();

// Game module
const Game = (() => {
    const player1 = createPlayer("Player 1", "X");
    const player2 = createPlayer("Player 2", "O");
    const restartButton = document.querySelector(".restart");
    let turn = 0;

    //handles player turn
    function playerTurn() {
        if (turn % 2 === 0) {
            turn++;
            return player1;
        } else {
            turn++;
            return player2;
        }
    }
    //starts the game
    function start() {
        DisplayController.generateTile();
    }
    //restarts the game
    restartButton.addEventListener("click", () => {
        turn = 0;
        DisplayController.clearTiles();

      });

    //hella ugly code, but it works :) feel free to commit a cleaner solution.
    function checkWin(){
        //checks if player1 hits win condition
     if((DisplayController.tileBlocks[0].textContent === player1.symbol && DisplayController.tileBlocks[1].textContent === player1.symbol && DisplayController.tileBlocks[2].textContent === player1.symbol) ||
        (DisplayController.tileBlocks[3].textContent === player1.symbol && DisplayController.tileBlocks[4].textContent === player1.symbol && DisplayController.tileBlocks[5].textContent === player1.symbol) ||
        (DisplayController.tileBlocks[6].textContent === player1.symbol && DisplayController.tileBlocks[7].textContent === player1.symbol && DisplayController.tileBlocks[8].textContent === player1.symbol) ||
        (DisplayController.tileBlocks[0].textContent === player1.symbol && DisplayController.tileBlocks[3].textContent === player1.symbol && DisplayController.tileBlocks[6].textContent === player1.symbol) ||
        (DisplayController.tileBlocks[1].textContent === player1.symbol && DisplayController.tileBlocks[4].textContent === player1.symbol && DisplayController.tileBlocks[7].textContent === player1.symbol) ||
        (DisplayController.tileBlocks[2].textContent === player1.symbol && DisplayController.tileBlocks[5].textContent === player1.symbol && DisplayController.tileBlocks[8].textContent === player1.symbol) ||
        (DisplayController.tileBlocks[0].textContent === player1.symbol && DisplayController.tileBlocks[4].textContent === player1.symbol && DisplayController.tileBlocks[8].textContent === player1.symbol) ||
        (DisplayController.tileBlocks[2].textContent === player1.symbol && DisplayController.tileBlocks[4].textContent === player1.symbol && DisplayController.tileBlocks[6].textContent === player1.symbol)) {
        alert(player1.name + " won!");
        return;
    }
     //checks if player2 hits win condition
    if((DisplayController.tileBlocks[0].textContent === player2.symbol && DisplayController.tileBlocks[1].textContent === player2.symbol && DisplayController.tileBlocks[2].textContent === player2.symbol) ||
    (DisplayController.tileBlocks[3].textContent === player2.symbol && DisplayController.tileBlocks[4].textContent === player2.symbol && DisplayController.tileBlocks[5].textContent === player2.symbol) ||
    (DisplayController.tileBlocks[6].textContent === player2.symbol && DisplayController.tileBlocks[7].textContent === player2.symbol && DisplayController.tileBlocks[8].textContent === player2.symbol) ||
    (DisplayController.tileBlocks[0].textContent === player2.symbol && DisplayController.tileBlocks[3].textContent === player2.symbol && DisplayController.tileBlocks[6].textContent === player2.symbol) ||
    (DisplayController.tileBlocks[1].textContent === player2.symbol && DisplayController.tileBlocks[4].textContent === player2.symbol && DisplayController.tileBlocks[7].textContent === player2.symbol) ||
    (DisplayController.tileBlocks[2].textContent === player2.symbol && DisplayController.tileBlocks[5].textContent === player2.symbol && DisplayController.tileBlocks[8].textContent === player2.symbol) ||
    (DisplayController.tileBlocks[0].textContent === player2.symbol && DisplayController.tileBlocks[4].textContent === player2.symbol && DisplayController.tileBlocks[8].textContent === player2.symbol) ||
    (DisplayController.tileBlocks[2].textContent === player2.symbol && DisplayController.tileBlocks[4].textContent === player2.symbol && DisplayController.tileBlocks[6].textContent === player2.symbol)) {
    alert(player2.name + " won!");
    return;
}   //if noone won at turn 9, it's a draw.
    if(turn ===9){
    alert("It's a draw!");
        }
    }

    return {
        start,
        playerTurn,
        checkWin
    };
})();

// Initialize game
Game.start();