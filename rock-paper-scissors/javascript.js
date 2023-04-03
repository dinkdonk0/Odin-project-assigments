
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const restart = document.querySelector(".restartGame");
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');

let playerImage = document.getElementById("playerImage");
let computerImage = document.getElementById("computerImage");

let playerPoints = 0;
let computerPoints = 0;

//Shouldnt need editing?
function GetComputerChoice(){

    const rndInt = Math.floor(Math.random() * 3) + 1
    let computerChoice = "";
    if(rndInt==1){
        computerChoice = "rock";
        computerImage.src = "rock.png";
    }
    if(rndInt==2){
        computerChoice = "paper";
        computerImage.src = "paper.png";
    }
    if(rndInt==3){
        computerChoice = "scissors";
        computerImage.src = "scissors.png";
    }
    return computerChoice;
}

function PlayRound(playerChoice){
const computerChoice = GetComputerChoice();

if(playerChoice===computerChoice){
  //needs rework, should paint "draw" on screen

}
else if((playerChoice==="rock" && computerChoice==="scissors")||
      (playerChoice==="paper" && computerChoice==="rock")||
      (playerChoice==="scissors" && computerChoice==="paper")){
      playerPoints++;
      playerScore.textContent = "Player: " + playerPoints;
}
else{
  computerPoints++;
  computerScore.textContent = "Computer: " + computerPoints;
}

}

//needs building
function restartGame(){
  playerPoints=0;
  computerPoints=0;
  computerScore.textContent = "Computer: " + computerPoints;
  playerScore.textContent = "Player: " + playerPoints;
  playerImage.src="question.png";
  computerImage.src="question.png";
}


//causes playround to fire on click

  rock.addEventListener('click', () => {
    if(playerPoints === 5 || computerPoints === 5){
      return null;
    }
    PlayRound("rock");
    playerImage.src = "rock.png"
  });
  paper.addEventListener('click', () => {
    if(playerPoints === 5 || computerPoints === 5){
      return null;
    }
    PlayRound("paper");
    playerImage.src = "paper.png"
  });
  scissors.addEventListener('click', () => {
    if(playerPoints === 5 || computerPoints === 5){
      return null;
    }
    PlayRound("scissors");
    playerImage.src = "scissors.png"
  });



//restarts game on click
restart.addEventListener("click",() =>{
  restartGame()
});