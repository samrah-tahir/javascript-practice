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


function game()
{
    let computer = 0;
    let player = 0;
    let roundWinner;

    for(let i = 0; i < 5; i++)
    {
        roundWinner = decisionMaker("rock",computerPlay());
        if(roundWinner == "computer")
            computer++;
        else if(roundWinner == "player")
            player++;

    }
    console.log("All 5 round scores:\nComputer: "+computer+"\tPlayer: "+player);
}

game();
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(decisionMaker(playerSelection, computerSelection));
// console.log(computerPlay());