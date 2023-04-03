const mainContainer = document.querySelector(".mainContainer");

function generateTile(){
//let tileBlocks = document.createElement("div");
    for(let i=0;i<16;i++){
        let tileBlocks = document.createElement("div");
        mainContainer.appendChild(tileBlocks);
        //tileBlocks.style.border = "thick solid #0000FF";
        
      
    }
}
generateTile();