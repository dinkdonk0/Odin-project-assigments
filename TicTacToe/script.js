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
}


generateTile();
