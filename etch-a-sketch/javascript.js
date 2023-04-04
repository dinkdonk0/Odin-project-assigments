const mainContainer = document.querySelector(".mainContainer");
const resetButton = document.querySelector("#reset");
const colorPicker = document.querySelector("#colorPicker");


//colorPicker.setAttribute("type", "color");


let tileBlocks = []; //array that all tileblocks will go in to

//generates the divs used as a grid
function generateTile(){

    for(let i=0;i<256;i++){ //creates tiles and puts them in the array :)
       
        let tileBlock = document.createElement("div");
        mainContainer.appendChild(tileBlock); 
        tileBlocks.push(tileBlock); 
    }
}

//styles the grid in to nice squares
function styleGrid(){
    mainContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
    mainContainer.style.gridTemplateRows = "repeat(16, 1fr)";
}


//run functions
generateTile();
styleGrid();

//handles "drag and move"
let isMouseDown = false;
for (let i = 0; i < tileBlocks.length; i++) {
  tileBlocks[i].addEventListener("mousedown", function () {
    isMouseDown = true;
    this.style.backgroundColor = colorPicker.value;
  });

  tileBlocks[i].addEventListener("mouseup", function () {
    isMouseDown = false;
  });

  tileBlocks[i].addEventListener("mousemove", function () {
    if (isMouseDown) {
      this.style.backgroundColor = colorPicker.value;
    }
  });
}


//lets user paint with chosen color.
colorPicker.addEventListener("click", function(){
  for(let i = 0; i < tileBlocks.length; i++){
    this.style.backgroundColor = colorPicker.value;
}
})

//resets the color
resetButton.addEventListener("click", function(){
    for(let i = 0; i < tileBlocks.length; i++){
        tileBlocks[i].style.backgroundColor = "white";
    }
})