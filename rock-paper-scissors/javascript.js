console.log("Rock paper scissors");


function getComputerChoice(){

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



function playRound(playerSelection, computerSelection) {
    console.log("Player chose " + playerSelection + " and the computer chose " + computerSelection)
    if(playerSelection===computerSelection){
        return "Even!";
    }
    else if((playerSelection==="rock" && computerSelection==="scissors")||
            (playerSelection==="paper" && computerSelection==="rock")||
            (playerSelection==="scissors" && computerSelection==="paper")){
        return "Player won!"
    }
    else{
        return "Computer won!"
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
