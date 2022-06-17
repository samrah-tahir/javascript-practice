/*Computer plays*/
function computerPlay(){
    let randomNum = Math.floor(Math.random() * (4-1) + 1);
    let computerChoice = "";
    if(randomNum === 1)
    {
        computerChoice = "rock";
    }
    else if(randomNum === 2)
    {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function decisionMaker(playerSelection, computerSelection){
    let prompt;
    let winner = "computer";
    if(playerSelection == computerSelection)
    {
        prompt = "It's a tie!";
        winner = "none";
    }
    else if(playerSelection == "paper")
    {
        if(computerSelection == "rock")
        {
            prompt = `You win! ${playerSelection} beats ${computerSelection}`;
            winner = "player";
        } 
        else if(computerSelection == "scissors")
        {
            prompt = `You lose! ${playerSelection} loses to ${computerSelection}`;
        }
            
    }
    else if(playerSelection == "rock")
    {
        if(computerSelection == "paper")
            prompt = `You lose! ${playerSelection} loses to ${computerSelection}`;
        else if(computerSelection == "scissors")
        {
            prompt = `You win! ${playerSelection} beats ${computerSelection}`;
            winner = "player";
        }        
    }
    else if(playerSelection == "scissors")
    {
        if(computerSelection == "paper")
        {
            prompt = `You win! ${playerSelection} beats ${computerSelection} `;
            winner = "player";
        }    
        else if(computerSelection == "rock")
            prompt = `You lose! ${playerSelection} loses to ${computerSelection}`;
    }

    console.log(prompt);
    return winner;
}

function playRound(playerChoice, computer){
    let roundWinner;
    let compScore = 0;
    let playerScore = 0;

    // console.log("hello");
    roundWinner = decisionMaker(playerChoice.toLowerCase(),computer);
    // console.log(roundWinner);
    if(roundWinner == "computer")
        compScore++;
    else if(roundWinner == "player")
        playerScore++;

}

function game()
{
    let computer = 0;
    let player = 0;
    let roundWinner;


    let choices = document.querySelectorAll(".btn");
    // console.log(choices[0]);
    choices.forEach( (choice) => {
            choice.addEventListener("click", function(e) {
                playRound(choice.name, computerPlay());
            });
    });

    
    console.log("All 5 round scores:\nComputer: "+computer+"\tPlayer: "+player);
}

game();
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(decisionMaker(playerSelection, computerSelection));
// console.log(computerPlay());