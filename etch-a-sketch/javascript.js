const mainContainer = document.querySelector(".mainContainer");
const resetButton = document.querySelector(".reset");
let tileBlocks = []; //array that all tileblocks will go in to

function generateTile(){

    for(let i=0;i<256;i++){ //creates tiles and puts them in the array :)
       
        let tileBlock = document.createElement("div");
        mainContainer.appendChild(tileBlock); 
        tileBlocks.push(tileBlock); 
    }
  
    
}
function styleGrid(){
    mainContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
    mainContainer.style.gridTemplateRows = "repeat(16, 1fr)";
}


//run functions
generateTile();
styleGrid();

//changed from mouseover to "drag and move"
let isMouseDown = false;
for (let i = 0; i < tileBlocks.length; i++) {
  tileBlocks[i].addEventListener("mousedown", function () {
    isMouseDown = true;
    this.style.backgroundColor = "blue";
  });

  tileBlocks[i].addEventListener("mouseup", function () {
    isMouseDown = false;
  });

  tileBlocks[i].addEventListener("mousemove", function () {
    if (isMouseDown) {
      this.style.backgroundColor = "blue";
    }
  });
}

resetButton.addEventListener("click", function(){
    for(let i = 0; i < tileBlocks.length; i++){
        tileBlocks[i].style.backgroundColor = "white";
    }
})