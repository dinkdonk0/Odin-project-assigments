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

function playerSelection(){
    const playerChoice = prompt("Choose rock, paper or scissors");
    playerChoice.toLowerCase();
    return playerChoice;
}



function playRound(playerChoice, computerSelection) {
    console.log("Player chose " + playerChoice + " and the computer chose " + computerSelection)
    if(playerChoice===computerSelection){
        return "Even!";
    }
    else if((playerChoice==="rock" && computerSelection==="scissors")||
            (playerChoice==="paper" && computerSelection==="rock")||
            (playerChoice==="scissors" && computerSelection==="paper")){
        return "Player won!"
    }
    else{
        return "Computer won!"
    }
  }

  const playerChoice = playerSelection();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerChoice, computerSelection));
