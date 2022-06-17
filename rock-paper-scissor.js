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
            prompt = `You win!`;
            winner = "player";
        } 
        else if(computerSelection == "scissors")
        {
            prompt = `You lose!`;
        }
            
    }
    else if(playerSelection == "rock")
    {
        if(computerSelection == "paper")
            prompt = `You lose!`;
        else if(computerSelection == "scissors")
        {
            prompt = `You win!`;
            winner = "player";
        }        
    }
    else if(playerSelection == "scissors")
    {
        if(computerSelection == "paper")
        {
            prompt = `You win!`;
            winner = "player";
        }    
        else if(computerSelection == "rock")
            prompt = `You lose!`;
    }
    let result = document.querySelector(".result");
    result.textContent = prompt;
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

function createGesture(playerChoice, player){
    let hand_rock;
    let hand_paper;
    let hand_scissor;
    if(player === "player"){
        hand_rock = document.querySelector(".playerFist");
        hand_paper = document.querySelector(".playerPaper");
        hand_scissor = document.querySelector(".playerScissor");
    }
    else {
        hand_rock = document.querySelector(".compFist");
        hand_paper = document.querySelector(".compPaper");
        hand_scissor = document.querySelector(".compScissor");
    }

    if(playerChoice === "rock")
    {
        hand_rock.style.display = "none";
        hand_paper.style.display = "none";
        hand_scissor.style.display = "none";
        hand_rock.style.display = "inline";
       
    }
    if(playerChoice === "paper"){
        // hand_paper = document.querySelector(".playerPaper");
        hand_rock.style.display = "none";
        hand_paper.style.display = "none";
        hand_scissor.style.display = "none";
        hand_paper.style.display = "inline";
    }
    if(playerChoice === "scissors"){
        hand_rock.style.display = "none";
        hand_paper.style.display = "none";
        hand_scissor.style.display = "none";
        hand_scissor.style.display = "inline";
    }

}

function game()
{
    let computer;
    let player;
    let computerChoice;


    let choices = document.querySelectorAll(".btn");
    // console.log(choices[0]);
    choices.forEach( (choice) => {
            choice.addEventListener("click", function(e) {
                computerChoice = computerPlay();
                createGesture(choice.name,"player");
                createGesture(computerChoice, "computer");
                playRound(choice.name, computerChoice);
            });
    });

    
   // console.log("All 5 round scores:\nComputer: "+computer+"\tPlayer: "+player);
}

game();
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(decisionMaker(playerSelection, computerSelection));
// console.log(computerPlay());