const mainContainer = document.querySelector(".mainContainer");
let tileBlocks = []; //array that all tileblocks will go in to

function generateTile(){

    for(let i=0;i<16;i++){ //creates tiles and puts them in the array :)
        
        let tileBlock = document.createElement("div");
        mainContainer.appendChild(tileBlock); 
        tileBlocks.push(tileBlock); 
    }
}

generateTile();

for(let i = 0; i < tileBlocks.length; i++){
    tileBlocks[i].addEventListener("mouseover", function(){
        console.log("so far so good");
    });
}