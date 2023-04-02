console.log("Rock paper scissors");



function GetComputerChoice(){

    const rndInt = Math.floor(Math.random() * 3) + 1
    let computerChoice = "";
    if(rndInt==1){
        computerChoice = "rock";
    }
    if(rndInt==2){
        computerChoice = "paper";
    }
    if(rndInt==3){
        computerChoice = "scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}

function PlayerSelection(){
    let playerChoice = prompt("Choose rock, paper or scissors. Type 0 to end game.");
    playerChoice.toLowerCase();
    return playerChoice;
}


let playerPoints = 0;
let computerPoints = 0;
function PlayRound(playerChoice, computerSelection) {
    console.log("Player chose " + playerChoice + " and the computer chose " + computerSelection)
    if(playerChoice===computerSelection){
        return "Even!";
    }
    else if((playerChoice==="rock" && computerSelection==="scissors")||
            (playerChoice==="paper" && computerSelection==="rock")||
            (playerChoice==="scissors" && computerSelection==="paper")){
                playerPoints++;
        return "Player won!"
    }
    else{
        computerPoints++;
        return "Computer won!"
    }
  }



  function Game(){
  
    while (true){
        if(playerPoints>4||computerPoints>4){
            break;
        }
        let playerChoice = PlayerSelection();
        if(playerChoice!=="rock" && playerChoice!=="paper" && playerChoice!=="scissors"){
            break;
            
        }
        else{
        let computerSelection = GetComputerChoice();
        console.log(PlayRound(playerChoice, computerSelection));
        console.log("The score is currently: " + playerPoints + " to " + computerPoints);
        }
        
        
    }
    return "Game ended with a score of " + playerPoints + " to " + computerPoints;
    }
  
 
console.log(Game());
