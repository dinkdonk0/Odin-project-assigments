const mainContainer = document.querySelector(".mainContainer");
const resetButton = document.querySelector("#reset");
const colorPicker = document.querySelector("#colorPicker");
const gridRange = document.querySelector(".slider");
const eraser = document.querySelector("#eraser");
const disco = document.querySelector("#disco");

let tileBlocks = []; //array that all tileblocks will go in to
let currentColor = colorPicker.value;

//generates the divs used as a grid
function generateTile(){

    for(let i=0;i<(gridRange.value*gridRange.value);i++){ //creates tiles and puts them in the array :)
       
        let tileBlock = document.createElement("div");
        mainContainer.appendChild(tileBlock); 
        tileBlocks.push(tileBlock); 
        attachPaintingEventListeners(tileBlock);
        tileBlocks[i].style.backgroundColor = "white";
      
    }
}

//styles the grid in to nice squares
function styleGrid(){
  mainContainer.style.gridTemplateColumns = `repeat(${gridRange.value}, 1fr)`;
    mainContainer.style.gridTemplateRows = `repeat(${gridRange.value}, 1fr)`;
}


//run functions
generateTile();
styleGrid();


//everything below here handles button/etc interactions

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

//resizes the grid
gridRange.addEventListener("input", function(){

  mainContainer.innerHTML = ''; 
  tileBlocks = []; 
  generateTile();
  styleGrid(); 
  attachPaintingEventListeners(tileBlock);
  for(let i = 0; i < tileBlocks.length; i++){
    tileBlocks[i].style.backgroundColor = "white";
}
  
})

function attachPaintingEventListeners(tileBlock) {

  tileBlock.addEventListener("mousedown", function () {
    isMouseDown = true;
    this.style.backgroundColor = colorPicker.value;
  });

  tileBlock.addEventListener("mouseup", function () {
    isMouseDown = false;
  });

  tileBlock.addEventListener("mousemove", function () {
    if (isMouseDown) {
      this.style.backgroundColor = colorPicker.value;
    }
  });
}


eraser.addEventListener("click", function () {
  colorPicker.value = "#ffffff";
});
