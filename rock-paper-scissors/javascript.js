
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
/*
rock.addEventListener('click', () => {
  alert('You clicked on the rock element!');
});

paper.addEventListener('click', () => {
  alert('You clicked on the paper element!');
});

scissors.addEventListener('click', () => {
  alert('You clicked on the scissors element!');
});
*/

//Shouldnt need editing?
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

/*
listen to rock, paper, scissors
if buttonpress on any of them
take the word rock, paper or scissors based on which button pressed
*/
function PlayerSelection() {
    let playerChoice;
  
    const rock = document.querySelector('.rock');
    rock.addEventListener('click', () => {
      playerChoice = 'rock';
      console.log(playerChoice);
    });
  
    const paper = document.querySelector('.paper');
    paper.addEventListener('click', () => {
      playerChoice = 'paper';
      console.log(playerChoice);
    });
  
    const scissors = document.querySelector('.scissors');
    scissors.addEventListener('click', () => {
      playerChoice = 'scissors';
      console.log(playerChoice);
    });
  
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
  
 
//console.log(Game());
